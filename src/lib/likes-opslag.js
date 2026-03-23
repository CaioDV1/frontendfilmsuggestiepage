export function getFilmStorageId(film) {
  return film.imdbId || film.wikidataId || film.title
}

export function getLikesMap() {
  try {
    const raw = localStorage.getItem('film-likes')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveLikesMap(likesMap) {
  try {
    localStorage.setItem('film-likes', JSON.stringify(likesMap))
  } catch {}
}

export function getStoredLikes(film) {
  const filmId = getFilmStorageId(film)
  const likesMap = getLikesMap()
  return Number(likesMap[filmId] || film.likes || 0)
}

export function saveStoredLikes(film, likes) {
  const filmId = getFilmStorageId(film)
  const likesMap = getLikesMap()
  likesMap[filmId] = likes
  saveLikesMap(likesMap)
}