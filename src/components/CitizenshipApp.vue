<template>
  <div class="citizen-app" :data-theme="resolvedTheme" :dir="direction">
    <header class="citizen-header">
      <a class="citizen-brand" href="/">
        <span class="brand-mark">§</span>
        <span><strong>{{ t('appName') }}</strong><small>{{ t('subtitle') }}</small></span>
      </a>
      <nav class="citizen-nav" aria-label="Primary navigation">
        <button v-for="item in navItems" :key="item.id" :class="{ active: view === item.id }" @click="view = item.id">{{ item.label }}</button>
      </nav>
      <div class="citizen-actions">
        <label class="language-control"><span class="sr-only">{{ t('language') }}</span><select v-model="selectedLanguage" :aria-label="t('language')"><option v-for="language in languageOptions" :key="language.code" :value="language.code">{{ language.label }}</option></select></label>
        <button class="icon-button" :aria-label="t('settings')" @click="view = 'settings'">⚙</button>
      </div>
    </header>

    <main class="citizen-main">
      <section v-if="view === 'home'" class="citizen-home">
        <div class="citizen-hero">
          <div>
            <span class="eyebrow">{{ t('appName') }} / 2026</span>
            <h1>{{ t('welcome') }}</h1>
            <p>{{ t('heroCopy') }}</p>
            <div class="hero-actions"><button class="solid-button" @click="beginStudy('all')">{{ t('startStudy') }} <span>→</span></button><button class="outline-button" @click="beginTest">{{ t('startTest') }} <span>↗</span></button></div>
          </div>
          <div class="hero-stamp"><span>33</span><small>{{ t('questions') }}<br>{{ t('test') }}</small></div>
        </div>
        <div class="metric-grid">
          <article><span class="metric-icon">◎</span><div><strong>{{ progressPercent }}%</strong><small>{{ t('progress') }}</small></div></article>
          <article><span class="metric-icon">✓</span><div><strong>{{ store.answeredCount }}</strong><small>{{ t('answered') }}</small></div></article>
          <article><span class="metric-icon">↗</span><div><strong>{{ store.accuracy }}%</strong><small>{{ t('accuracy') }}</small></div></article>
          <article><span class="metric-icon">✦</span><div><strong>{{ store.currentStreak }}</strong><small>{{ t('streak') }}</small></div></article>
        </div>
        <div class="home-columns">
          <section class="surface continue-surface"><div class="surface-heading"><div><span class="eyebrow">{{ t('continue') }}</span><h2>{{ currentStudyLabel }}</h2></div><span class="surface-count">{{ store.study.currentIndex + 1 }} / {{ store.study.questionIds.length }}</span></div><div class="progress-track"><span :style="{ width: `${studyProgress}%` }"></span></div><button class="text-button" @click="view = 'study'">{{ t('continue') }} <span>→</span></button></section>
          <section class="surface streak-surface"><span class="eyebrow">{{ t('streak') }}</span><div class="streak-number">{{ store.currentStreak }} <small>days</small></div><p>{{ store.currentStreak ? 'Your rhythm is building.' : 'Answer one question today to begin.' }}</p><div class="week-dots"><i v-for="(day, index) in weekDays" :key="day" :class="{ filled: index < Math.min(store.currentStreak, 7) }"></i></div></section>
        </div>
        <section class="surface quick-start"><div><span class="eyebrow">{{ t('dailyGoal') }}</span><h2>Make 10 questions count.</h2><p>Short sessions, clear feedback, lasting memory.</p></div><button class="solid-button" @click="beginStudy('all')">{{ t('study') }} <span>→</span></button></section>
      </section>

      <section v-else-if="view === 'study'" class="study-view">
        <div v-if="!studyQuestion" class="empty-state surface"><span>☆</span><h2>{{ t('noFavorites') }}</h2><button class="solid-button" @click="beginStudy('all')">{{ t('allQuestions') }}</button></div>
        <template v-else>
          <div class="view-heading"><div><span class="eyebrow">{{ t('study') }} / {{ studyModeLabel }}</span><h1>{{ t('question') }} {{ store.study.currentIndex + 1 }} <small>{{ t('of') }} {{ store.study.questionIds.length }}</small></h1></div><button class="favorite-button" :class="{ saved: isFavorite(studyQuestion.id) }" @click="store.toggleFavorite(studyQuestion.id)">{{ isFavorite(studyQuestion.id) ? '★' : '☆' }} <span>{{ isFavorite(studyQuestion.id) ? t('removeFavorite') : t('favorite') }}</span></button></div>
          <div class="study-layout"><article class="question-panel surface"><div class="question-meta"><span>{{ studyQuestion.category }}</span><span>{{ studyQuestion.state ?? 'Deutschland' }}</span></div><h2>{{ studyQuestion.question }}</h2><div v-if="studyQuestion.image" class="question-image">{{ studyQuestion.image.url.replaceAll('_', ' ') }}<small>{{ studyQuestion.image.text }}</small></div><div class="answer-list"><button v-for="(answer, index) in studyQuestion.answers" :key="answer" class="answer-option" :class="answerClass(studyQuestion.id, index)" :disabled="hasStudyAnswer(studyQuestion.id)" @click="selectStudyAnswer(index)"><span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span><span>{{ answer }}</span><b v-if="answerClass(studyQuestion.id, index) === 'correct'">✓</b><b v-else-if="answerClass(studyQuestion.id, index) === 'incorrect'">×</b></button></div><div v-if="hasStudyAnswer(studyQuestion.id)" class="feedback" :class="store.answers[studyQuestion.id]?.correct ? 'good' : 'bad'"><strong>{{ store.answers[studyQuestion.id]?.correct ? '✓ ' + t('correct') : '× ' + t('incorrect') }}</strong><span>{{ t('explanation') }}: {{ studyQuestion.answers[studyQuestion.correctAnswer] }}</span></div><div class="question-footer"><button class="outline-button" :disabled="store.study.currentIndex === 0" @click="store.moveStudy(-1)">← {{ t('previous') }}</button><button class="solid-button" :disabled="store.study.currentIndex === store.study.questionIds.length - 1" @click="store.moveStudy(1)">{{ t('next') }} →</button></div></article><aside class="study-aside"><div class="surface mini-progress"><span class="eyebrow">{{ t('progress') }}</span><strong>{{ studyProgress }}%</strong><div class="progress-track"><span :style="{ width: `${studyProgress}%` }"></span></div><small>{{ store.answeredCount }} {{ t('of') }} {{ questions.length }} {{ t('answered') }}</small></div><div class="surface mode-picker"><span class="eyebrow">{{ t('study') }}</span><button @click="beginStudy('all')">{{ t('allQuestions') }} <b>→</b></button><button @click="view = 'plan'">{{ t('plan') }} <b>→</b></button><button @click="beginStudy('mistakes')">{{ t('reviewMistakes') }} <b>→</b></button></div></aside></div>
        </template>
      </section>

      <section v-else-if="view === 'plan'" class="plan-view"><div class="view-heading"><div><span class="eyebrow">{{ t('study') }} / {{ t('plan') }}</span><h1>{{ t('plan') }}</h1></div><select class="state-select" v-model="planState" @change="beginPlan"><option value="">{{ t('allQuestions') }}</option><option v-for="state in bundeslaender" :key="state" :value="state">{{ state }}</option></select></div><p class="lead-copy">{{ t('stateQuestions') }}. Your {{ questions.length }} questions are distributed dynamically across seven manageable days.</p><div class="plan-grid"><article v-for="day in planDays" :key="day.number" class="plan-card" :class="{ current: day.number === currentPlanDay, done: day.completed === day.total && day.total > 0 }"><div class="plan-card-top"><span>0{{ day.number }}</span><strong>{{ t('day') }} {{ day.number }}</strong><b>{{ day.completed }}/{{ day.total }}</b></div><h2>{{ day.total }} {{ t('questions') }}</h2><div class="progress-track"><span :style="{ width: `${day.total ? (day.completed / day.total) * 100 : 0}%` }"></span></div><button class="text-button" @click="beginStudy('all', '', day.ids)">{{ day.completed === day.total && day.total ? '✓ ' + t('completed') : t('study') }} <span>→</span></button></article></div><section class="surface state-filter"><span class="eyebrow">{{ t('chooseState') }}</span><h2>{{ t('selectState') }}</h2><div class="state-chips"><button v-for="state in bundeslaender" :key="state" :class="{ selected: planState === state }" @click="planState = state; beginPlan()">{{ state }}</button></div></section></section>

      <section v-else-if="view === 'test'" class="test-view"><div v-if="testResult" class="result-panel surface"><span class="result-kicker">{{ t('result') }}</span><div class="result-score">{{ testResult.score }}<small> / {{ testResult.questionIds.length }}</small></div><div class="result-status" :class="testResult.score >= 17 ? 'passed' : 'failed'">{{ testResult.score >= 17 ? '✓ ' + t('passed') : '→ ' + t('failed') }}</div><div class="result-metrics"><span><b>{{ testResult.score }}</b>{{ t('correct') }}</span><span><b>{{ testResult.questionIds.length - testResult.score - unansweredResult }}</b>{{ t('wrong') }}</span><span><b>{{ unansweredResult }}</b>{{ t('unanswered') }}</span><span><b>{{ formatTime(testResult.timeUsedSeconds) }}</b>{{ t('time') }}</span></div><div class="hero-actions"><button class="solid-button" @click="beginTest">{{ t('newTest') }} <span>↗</span></button><button class="outline-button" @click="testResult = null; view = 'mistakes'">{{ t('review') }} <span>→</span></button></div></div><template v-else-if="store.activeTest"><div class="view-heading test-heading"><div><span class="eyebrow">{{ t('activeTest') }}</span><h1>{{ t('test') }} <small>33 {{ t('questions') }}</small></h1></div><div class="timer" :class="{ urgent: remainingSeconds < 300 }">◷ {{ formatTime(remainingSeconds) }}</div></div><div class="test-layout"><article class="question-panel surface"><div class="question-meta"><span>{{ currentTestIndex + 1 }} / 33</span><span>{{ testQuestion?.category }}</span></div><h2>{{ testQuestion?.question }}</h2><div v-if="testQuestion?.image" class="question-image">{{ testQuestion.image.url.replaceAll('_', ' ') }}</div><div class="answer-list"> <button v-for="(answer, index) in testQuestion?.answers ?? []" :key="answer" class="answer-option" :class="{ selected: store.activeTest.answers[testQuestion?.id ?? ''] === index }" @click="testQuestion && store.answerTest(testQuestion.id, index)"><span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span><span>{{ answer }}</span></button></div><div class="question-footer"><button class="outline-button" :disabled="currentTestIndex === 0" @click="currentTestIndex -= 1">← {{ t('previous') }}</button><button v-if="currentTestIndex < 32" class="solid-button" @click="currentTestIndex += 1">{{ t('next') }} →</button><button v-else class="solid-button" @click="submitTest">{{ t('submit') }} ✓</button></div></article><aside class="test-navigator surface"><div class="surface-heading"><span class="eyebrow">{{ t('question') }}</span><strong>{{ answeredTestCount }}/33</strong></div><div class="number-grid"><button v-for="(id, index) in store.activeTest.questionIds" :key="id" :class="{ active: index === currentTestIndex, answered: store.activeTest.answers[id] !== null }" @click="currentTestIndex = index">{{ index + 1 }}</button></div><button class="solid-button full-button" @click="submitTest">{{ t('submit') }}</button></aside></div></template><div v-else class="empty-state surface"><span>◌</span><h2>{{ t('test') }}</h2><p>33 random questions. 30 minutes. One clear result.</p><button class="solid-button" @click="beginTest">{{ t('startTest') }} <span>→</span></button></div></section>

      <section v-else-if="view === 'mistakes' || view === 'favorites'" class="list-view"><div class="view-heading"><div><span class="eyebrow">{{ view === 'mistakes' ? t('reviewMistakes') : t('favorites') }}</span><h1>{{ view === 'mistakes' ? t('mistakes') : t('favorites') }} <small>{{ activeList.length }}</small></h1></div><button v-if="activeList.length" class="solid-button" @click="beginStudy(view === 'mistakes' ? 'mistakes' : 'favorites')">{{ t('study') }} <span>→</span></button></div><div v-if="activeList.length" class="question-list"> <article v-for="item in activeList" :key="item.question.id" class="surface list-item"><div><span class="eyebrow">{{ item.question.category }}</span><h2>{{ item.question.question }}</h2><p v-if="view === 'mistakes'">{{ t('wrong') }}: {{ item.record?.wrongAttempts ?? 0 }} · {{ t('correct') }} reviews: {{ item.record?.correctReviews ?? 0 }}/3</p></div><button class="icon-button" :aria-label="view === 'mistakes' ? t('favorite') : t('removeFavorite')" @click="view === 'favorites' && store.toggleFavorite(item.question.id)">{{ view === 'favorites' ? '★' : '→' }}</button></article></div><div v-else class="empty-state surface"><span>{{ view === 'mistakes' ? '✓' : '☆' }}</span><h2>{{ view === 'mistakes' ? t('noMistakes') : t('noFavorites') }}</h2><button class="outline-button" @click="beginStudy('all')">{{ t('allQuestions') }}</button></div></section>

      <section v-else-if="view === 'stats'" class="stats-view"><div class="view-heading"><div><span class="eyebrow">{{ t('stats') }}</span><h1>{{ t('stats') }}</h1></div></div><div class="metric-grid stats-metrics"><article><span class="metric-icon">◎</span><div><strong>{{ questions.length }}</strong><small>{{ t('questions') }}</small></div></article><article><span class="metric-icon">✓</span><div><strong>{{ store.correctCount }}</strong><small>{{ t('correct') }}</small></div></article><article><span class="metric-icon">×</span><div><strong>{{ Object.keys(store.mistakes).length }}</strong><small>{{ t('wrong') }}</small></div></article><article><span class="metric-icon">%</span><div><strong>{{ store.accuracy }}%</strong><small>{{ t('accuracy') }}</small></div></article></div><div class="stats-columns"><section class="surface"><div class="surface-heading"><h2>{{ t('weakCategories') }}</h2><span>{{ t('accuracy') }}</span></div><div v-for="category in categoryStats" :key="category.name" class="category-row"><div><span>{{ category.name }}</span><b>{{ category.accuracy }}%</b></div><div class="progress-track"><span :style="{ width: `${category.accuracy}%` }"></span></div><button class="text-button" @click="beginStudy('category', category.name)">{{ t('practice') }} →</button></div></section><section class="surface test-stats"><div class="surface-heading"><h2>{{ t('tests') }}</h2><span>{{ store.tests.length }}</span></div><div class="big-stat">{{ averageTestScore }}<small>/ 33 {{ t('average') }}</small></div><div class="test-stat-line"><span>{{ t('highest') }}</span><b>{{ highestScore }}/33</b></div><div class="test-stat-line"><span>{{ t('passRate') }}</span><b>{{ passRate }}%</b></div></section></div></section>

      <section v-else class="settings-view"><div class="view-heading"><div><span class="eyebrow">{{ t('settings') }}</span><h1>{{ t('settings') }}</h1></div></div><div class="settings-grid"><section class="surface setting-group"><h2>{{ t('language') }}</h2><p>{{ t('language') }} and question data are kept separate from progress.</p><select class="state-select" v-model="selectedLanguage"><option v-for="language in languageOptions" :key="language.code" :value="language.code">{{ language.label }}</option></select></section><section class="surface setting-group"><h2>{{ t('theme') }}</h2><div class="theme-options"><button v-for="theme in themes" :key="theme" :class="{ selected: store.settings.theme === theme }" @click="store.setTheme(theme)">{{ theme === 'system' ? '◐' : theme === 'light' ? '☼' : '◑' }} {{ t(theme) }}</button></div></section><section class="surface setting-group"><h2>Backup</h2><p>Keep your study history portable between devices.</p><div class="hero-actions"><button class="outline-button" @click="store.exportData">↓ {{ t('export') }}</button><button class="outline-button" @click="fileInput?.click()">↑ {{ t('import') }}</button><input ref="fileInput" class="sr-only" type="file" accept="application/json" @change="handleImport"></div></section><section class="surface setting-group danger-group"><h2>Reset</h2><p>This removes local progress, favorites, mistakes, and tests.</p><button class="danger-button" @click="resetProgress">{{ t('reset') }}</button></section></div></section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { languageOptions } from '../i18n'
import { BUNDESLAENDER, categories, filterQuestions, questions } from '../utils/citizenshipQuestions'
import { useCitizenshipStore } from '../stores/citizenship'
import type { Question, SupportedLanguage, TestResult } from '../types/citizenship'
import '../styles/citizenship.css'

const { t, locale } = useI18n()
const store = useCitizenshipStore()
const view = ref<'home' | 'study' | 'plan' | 'test' | 'mistakes' | 'favorites' | 'stats' | 'settings'>('home')
const planState = ref('')
const selectedLanguage = ref<SupportedLanguage>(store.settings.language)
const fileInput = ref<HTMLInputElement>()
const testResult = ref<TestResult | null>(null)
const currentTestIndex = ref(0)
const remainingSeconds = ref(0)
const planDays = ref<{ number: number; ids: string[]; completed: number; total: number }[]>([])
let timer: number | undefined

const bundeslaender = BUNDESLAENDER
const questionsCount = questions.length
const themes = ['system', 'light', 'dark'] as const
const navItems = computed(() => [{ id: 'home', label: t('home') }, { id: 'study', label: t('study') }, { id: 'plan', label: t('plan') }, { id: 'test', label: t('test') }, { id: 'stats', label: t('stats') }])
const direction = computed(() => ['fa', 'ar'].includes(selectedLanguage.value) ? 'rtl' : 'ltr')
const resolvedTheme = computed(() => store.settings.theme === 'system' ? 'dark' : store.settings.theme)
const progressPercent = computed(() => Math.round((store.answeredCount / questionsCount) * 100))
const studyProgress = computed(() => store.study.questionIds.length ? Math.round(((store.study.currentIndex + (store.answers[store.currentStudyQuestion.id] ? 1 : 0)) / store.study.questionIds.length) * 100) : 0)
const studyQuestion = computed(() => store.currentStudyQuestion)
const studyModeLabel = computed(() => store.study.mode === 'state' ? store.study.filter : store.study.mode === 'mistakes' ? t('mistakes') : store.study.mode === 'favorites' ? t('favorites') : store.study.mode === 'category' ? store.study.filter : t('allQuestions'))
const currentStudyLabel = computed(() => store.study.mode === 'all' ? t('allQuestions') : studyModeLabel.value)
const testQuestion = computed(() => store.activeTest ? questions.find((question) => question.id === store.activeTest?.questionIds[currentTestIndex.value]) : undefined)
const answeredTestCount = computed(() => store.activeTest ? Object.values(store.activeTest.answers).filter((answer) => answer !== null).length : 0)
const activeList = computed(() => {
  const ids = view.value === 'mistakes' ? store.activeMistakes : store.favorites
  return ids.map((id) => ({ question: questions.find((question) => question.id === id), record: store.mistakes[id] })).filter((item): item is { question: Question; record: typeof store.mistakes[string] | undefined } => Boolean(item.question))
})
const categoryStats = computed(() => categories.map((name) => { const ids = questions.filter((question) => question.category === name).map((question) => question.id); const records = ids.map((id) => store.answers[id]).filter(Boolean); return { name, accuracy: records.length ? Math.round((records.filter((record) => record.correct).length / records.length) * 100) : 100, count: records.length } }).filter((category) => category.count > 0).sort((a, b) => a.accuracy - b.accuracy))
const averageTestScore = computed(() => store.tests.length ? Math.round(store.tests.reduce((sum, test) => sum + test.score, 0) / store.tests.length) : 0)
const highestScore = computed(() => store.tests.length ? Math.max(...store.tests.map((test) => test.score)) : 0)
const passRate = computed(() => store.tests.length ? Math.round((store.tests.filter((test) => test.score >= 17).length / store.tests.length) * 100) : 0)
const unansweredResult = computed(() => testResult.value ? Object.values(testResult.value.answers).filter((answer) => answer === null).length : 0)
const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

function isFavorite(id: string) { return store.favorites.includes(id) }
function hasStudyAnswer(id: string) { return Boolean(store.answers[id]) }
function answerClass(id: string, index: number) { const answer = store.answers[id]; if (!answer) return ''; const question = questions.find((item) => item.id === id); if (index === question?.correctAnswer) return 'correct'; if (answer.selected === index) return 'incorrect'; return '' }
function selectStudyAnswer(index: number) { store.answerStudy(studyQuestion.value.id, index) }
function beginStudy(mode: 'all' | 'state' | 'favorites' | 'mistakes' | 'category', filter = '', customIds?: string[]) { if (customIds) { store.study.questionIds = customIds; store.study.currentIndex = 0; store.study.mode = mode; store.study.filter = filter; store.persist() } else store.startStudy(mode, filter); view.value = 'study' }
function beginPlan() { const pool = planState.value ? filterQuestions('state', planState.value, [], []) : questions; const groups: { number: number; ids: string[]; completed: number; total: number }[] = []; const base = Math.floor(pool.length / 7); const extra = pool.length % 7; let cursor = 0; for (let index = 0; index < 7; index += 1) { const size = base + (index < extra ? 1 : 0); const ids = pool.slice(cursor, cursor + size).map((question) => question.id); groups.push({ number: index + 1, ids, completed: ids.filter((id) => store.answers[id]).length, total: ids.length }); cursor += size } planDays.value = groups }
const currentPlanDay = computed(() => { const firstOpen = planDays.value.find((day) => day.completed < day.total); return firstOpen?.number ?? 7 })
function beginTest() { store.beginTest(); currentTestIndex.value = 0; remainingSeconds.value = 30 * 60; testResult.value = null; view.value = 'test'; startTimer() }
function startTimer() { if (timer) window.clearInterval(timer); timer = window.setInterval(() => { remainingSeconds.value -= 1; if (remainingSeconds.value <= 0) submitTest() }, 1000) }
function submitTest() { if (!store.activeTest) return; if (timer) window.clearInterval(timer); testResult.value = store.finishTest(30 * 60 - Math.max(remainingSeconds.value, 0)) }
function formatTime(seconds: number) { return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}` }
function resetProgress() { if (window.confirm(t('resetConfirm'))) store.reset() }
function handleImport(event: Event) { const input = event.target as HTMLInputElement; const file = input.files?.[0]; if (file) store.importData(file).catch(() => window.alert('Invalid progress file.')) }
watch(selectedLanguage, (language) => { store.setLanguage(language); locale.value = language; document.documentElement.lang = language })
watch(() => store.settings.theme, (theme) => { document.documentElement.style.colorScheme = theme === 'system' ? 'dark' : theme })
onMounted(() => { locale.value = store.settings.language; planState.value = store.settings.state; beginPlan() })
onBeforeUnmount(() => { if (timer) window.clearInterval(timer) })
</script>
