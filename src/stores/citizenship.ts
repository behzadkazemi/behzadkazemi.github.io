import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { filterQuestions, questions, shuffle, todayKey } from '../utils/citizenshipQuestions'
import type { AnswerRecord, AppSettings, MistakeRecord, PersistentStorage, StudySession, TestResult } from '../types/citizenship'

const STORAGE_KEY = 'staatsklar-storage'
const defaultStudy: StudySession = { questionIds: [], currentIndex: 0, mode: 'all', filter: '' }

function readStorage(): PersistentStorage {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved) as PersistentStorage
  } catch {
    // A corrupt local value should never block the app from opening.
  }
  return {
    version: 1,
    settings: { language: 'de', theme: 'system', state: '' },
    answers: {}, favorites: [], mistakes: {}, tests: [], study: defaultStudy,
    streak: { activeDates: [], longest: 0 }
  }
}

export const useCitizenshipStore = defineStore('citizenship', () => {
  const stored = readStorage()
  const settings = ref<AppSettings>(stored.settings)
  const answers = ref<Record<string, AnswerRecord>>(stored.answers)
  const favorites = ref<string[]>(stored.favorites)
  const mistakes = ref<Record<string, MistakeRecord>>(stored.mistakes)
  const tests = ref<TestResult[]>(stored.tests)
  const study = ref<StudySession>(stored.study.questionIds.length ? stored.study : { ...defaultStudy, questionIds: questions.map((question) => question.id) })
  const streak = ref(stored.streak)
  const activeTest = ref<{ questionIds: string[]; answers: Record<string, number | null>; startedAt: string; durationSeconds: number } | null>(null)

  const answeredCount = computed(() => Object.keys(answers.value).length)
  const correctCount = computed(() => Object.values(answers.value).filter((answer) => answer.correct).length)
  const accuracy = computed(() => answeredCount.value ? Math.round((correctCount.value / answeredCount.value) * 100) : 0)
  const currentStudyQuestion = computed(() => questions.find((question) => question.id === study.value.questionIds[study.value.currentIndex]) ?? questions[0])
  const activeMistakes = computed(() => Object.entries(mistakes.value).filter(([, record]) => record.correctReviews < 3).map(([id]) => id))
  const currentStreak = computed(() => {
    const dates = new Set(streak.value.activeDates)
    let count = 0
    const cursor = new Date()
    while (dates.has(todayKey(cursor))) {
      count += 1
      cursor.setDate(cursor.getDate() - 1)
    }
    return count
  })

  function persist() {
    const snapshot: PersistentStorage = { version: 1, settings: settings.value, answers: answers.value, favorites: favorites.value, mistakes: mistakes.value, tests: tests.value, study: study.value, streak: streak.value }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
  }

  function markActivity() {
    const today = todayKey()
    if (!streak.value.activeDates.includes(today)) streak.value.activeDates = [...streak.value.activeDates, today].slice(-400)
    streak.value.longest = Math.max(streak.value.longest, currentStreak.value)
  }

  function setLanguage(language: AppSettings['language']) { settings.value.language = language; persist() }
  function setTheme(theme: AppSettings['theme']) { settings.value.theme = theme; persist() }
  function setState(state: string) { settings.value.state = state; persist() }

  function startStudy(mode: StudySession['mode'] = 'all', filter = '') {
    const ids = filterQuestions(mode, filter, favorites.value, activeMistakes.value).map((question) => question.id)
    study.value = { questionIds: ids, currentIndex: 0, mode, filter }
    persist()
  }

  function moveStudy(step: number) {
    study.value.currentIndex = Math.max(0, Math.min(study.value.questionIds.length - 1, study.value.currentIndex + step))
    persist()
  }

  function answerStudy(questionId: string, selected: number) {
    const question = questions.find((item) => item.id === questionId)
    if (!question) return
    const isCorrect = selected === question.correctAnswer
    answers.value[questionId] = { selected, correct: isCorrect, answeredAt: new Date().toISOString() }
    if (!isCorrect) {
      const previous = mistakes.value[questionId]
      mistakes.value[questionId] = { wrongAttempts: (previous?.wrongAttempts ?? 0) + 1, correctReviews: 0, lastWrongAt: new Date().toISOString() }
    } else if (mistakes.value[questionId]) {
      mistakes.value[questionId].correctReviews = Math.min(3, mistakes.value[questionId].correctReviews + 1)
    }
    markActivity()
    persist()
  }

  function toggleFavorite(questionId: string) {
    favorites.value = favorites.value.includes(questionId) ? favorites.value.filter((id) => id !== questionId) : [...favorites.value, questionId]
    persist()
  }

  function beginTest(durationSeconds = 30 * 60) {
    const selected = shuffle(questions).slice(0, Math.min(33, questions.length))
    activeTest.value = { questionIds: selected.map((question) => question.id), answers: Object.fromEntries(selected.map((question) => [question.id, null])), startedAt: new Date().toISOString(), durationSeconds }
  }

  function answerTest(questionId: string, selected: number) {
    if (activeTest.value) activeTest.value.answers[questionId] = selected
  }

  function finishTest(timeUsedSeconds: number) {
    if (!activeTest.value) return null
    const result: TestResult = { id: crypto.randomUUID(), questionIds: activeTest.value.questionIds, answers: activeTest.value.answers, score: activeTest.value.questionIds.reduce((score, id) => score + (activeTest.value?.answers[id] === questions.find((question) => question.id === id)?.correctAnswer ? 1 : 0), 0), startedAt: activeTest.value.startedAt, completedAt: new Date().toISOString(), timeUsedSeconds }
    tests.value = [result, ...tests.value].slice(0, 30)
    Object.entries(result.answers).forEach(([id, selected]) => { if (selected !== null) answerStudy(id, selected) })
    activeTest.value = null
    persist()
    return result
  }

  function exportData() {
    const snapshot: PersistentStorage = { version: 1, settings: settings.value, answers: answers.value, favorites: favorites.value, mistakes: mistakes.value, tests: tests.value, study: study.value, streak: streak.value }
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url; link.download = 'staatsklar-progress.json'; link.click(); URL.revokeObjectURL(url)
  }

  function importData(file: File) {
    return file.text().then((text) => {
      const imported = JSON.parse(text) as PersistentStorage
      if (imported.version !== 1 || !imported.settings || !imported.answers) throw new Error('Invalid progress file')
      settings.value = imported.settings; answers.value = imported.answers; favorites.value = imported.favorites ?? []; mistakes.value = imported.mistakes ?? {}; tests.value = imported.tests ?? []; study.value = imported.study ?? defaultStudy; streak.value = imported.streak ?? { activeDates: [], longest: 0 }; persist()
    })
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY)
    window.location.reload()
  }

  return { settings, answers, favorites, mistakes, tests, study, streak, activeTest, answeredCount, correctCount, accuracy, currentStudyQuestion, activeMistakes, currentStreak, setLanguage, setTheme, setState, startStudy, moveStudy, answerStudy, toggleFavorite, beginTest, answerTest, finishTest, exportData, importData, reset, persist }
})
