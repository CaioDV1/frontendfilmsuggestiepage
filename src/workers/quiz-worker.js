import { getQuizResults } from '../lib/quiz-resultaten.js'

self.onmessage = (event) => {
  const { items, answers } = event.data
  const results = getQuizResults(items, answers)
  self.postMessage(results)
}