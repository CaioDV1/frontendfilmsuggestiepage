import { getJson } from './api-opvragingen.js'

export async function fetchWikidataFilmDetails(qid) {
  if (!qid) return {}
  return getJson(`/wikidata/${qid}`, 'Kon filmdetails niet ophalen via de backend.')
}