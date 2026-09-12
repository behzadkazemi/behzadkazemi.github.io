import rawQuestions from '../data/questions.json'
import type { Question, RawQuestion } from '../types/citizenship'

export const BUNDESLAENDER = [
  'Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen',
  'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Rheinland-Pfalz',
  'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'
]

const questionData = rawQuestions as RawQuestion[]

export const questions: Question[] = questionData.map((question, index) => ({
  id: String(index + 1),
  question: question.question,
  answers: question.answers,
  correctAnswer: question.correct,
  category: question.category,
  state: BUNDESLAENDER.includes(question.category) ? question.category : null,
  image: question.img
}))

export const categories = [...new Set(questions.map((question) => question.category))]

export function filterQuestions(mode: 'all' | 'state' | 'favorites' | 'mistakes' | 'category', filter: string, favorites: string[], mistakes: string[]) {
  if (mode === 'favorites') return questions.filter((question) => favorites.includes(question.id))
  if (mode === 'mistakes') return questions.filter((question) => mistakes.includes(question.id))
  if (mode === 'state') return questions.filter((question) => question.state === filter || question.state === null)
  if (mode === 'category') return questions.filter((question) => question.category === filter)
  return questions
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]]
  }
  return copy
}

export function todayKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function formatDateKey(date: Date) {
  return todayKey(date)
}
