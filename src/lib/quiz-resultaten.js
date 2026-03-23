import {
  filterMoviesByPeriod,
  filterMoviesByQuizGenre,
  filterMoviesByRuntime,
  shuffleMovies
} from './filtermovies.js'

export function pickResultsFromPool(pool) {
  const withPosterFirst = [...pool].sort((a, b) => {
    const aHasImage = a.image ? 1 : 0
    const bHasImage = b.image ? 1 : 0
    return bHasImage - aHasImage
  })

  return shuffleMovies(withPosterFirst).slice(0, 3)
}

export function getQuizResults(items, answers) {
  const { genre, period, time } = answers

  const genreMatches = filterMoviesByQuizGenre(items, genre)
  const genreAndPeriodMatches = filterMoviesByPeriod(genreMatches, period)
  const genreAndTimeMatches = filterMoviesByRuntime(genreMatches, time)
  const exactMatches = filterMoviesByRuntime(genreAndPeriodMatches, time)

  let pool = []

  if (exactMatches.length >= 3) {
    pool = exactMatches
  } else if (genreAndPeriodMatches.length >= 3) {
    pool = genreAndPeriodMatches
  } else if (genreAndTimeMatches.length >= 3) {
    pool = genreAndTimeMatches
  } else if (genreMatches.length >= 3) {
    pool = genreMatches
  } else {
    pool = genreMatches.length ? genreMatches : items
  }

  return pickResultsFromPool(pool)
}