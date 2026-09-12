export type SupportedLanguage = 'de' | 'en' | 'fa' | 'ar' | 'tr' | 'fr' | 'es' | 'it' | 'ru' | 'uk' | 'pl' | 'pt' | 'zh' | 'ja'

export interface RawQuestion {
  question: string
  answers: string[]
  correct: number
  category: string
  img?: {
    url: string
    text?: string
  }
}

export interface Question {
  id: string
  question: string
  answers: string[]
  correctAnswer: number
  category: string
  state: string | null
  image?: RawQuestion['img']
}

export interface AnswerRecord {
  selected: number | null
  correct: boolean
  answeredAt: string
}

export interface MistakeRecord {
  wrongAttempts: number
  correctReviews: number
  lastWrongAt: string
}

export interface TestResult {
  id: string
  questionIds: string[]
  answers: Record<string, number | null>
  score: number
  startedAt: string
  completedAt: string
  timeUsedSeconds: number
}

export interface StudySession {
  questionIds: string[]
  currentIndex: number
  mode: 'all' | 'state' | 'favorites' | 'mistakes' | 'category'
  filter: string
}

export interface AppSettings {
  language: SupportedLanguage
  theme: 'light' | 'dark' | 'system'
  state: string
}

export interface PersistentStorage {
  version: 1
  settings: AppSettings
  answers: Record<string, AnswerRecord>
  favorites: string[]
  mistakes: Record<string, MistakeRecord>
  tests: TestResult[]
  study: StudySession
  streak: {
    activeDates: string[]
    longest: number
  }
}
