import { getJson, postJson } from './api-opvragingen.js'

export function getFilmQid(film) {
  return film?.wikidataId || ''
}

export function fetchCommentsByQid(qid) {
  return getJson(`/comments/${qid}`, 'Kon comments niet ophalen.')
}

export function postCommentByQid(qid, commentData) {
  return postJson(`/comments/${qid}`, commentData, 'Kon comment niet opslaan.')
}