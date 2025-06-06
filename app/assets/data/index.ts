import _2023 from '@/app/assets/data/2023/index.json'
import _2024 from '@/app/assets/data/2024/index.json'

export interface Question {
  question: string
  image1: string
  image2: string
  options: string[]
  correctAnswer: number
}

const allQuestions: Question[] = [
  ..._2023,
  ..._2024,
]



export function getRandomQuestions(n: number = 20): Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, n)
}

export const quizData: Question[] = getRandomQuestions()