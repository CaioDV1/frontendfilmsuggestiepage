import { postJson } from './api-opvragingen.js'

export async function enrichMoviesWithWikidata(movies) {
  if (!Array.isArray(movies) || !movies.length) {
    return []
  }

  return postJson(
    '/enrich-movies',
    { movies },
    'Kon films niet verrijken via de backend.'
  )
}