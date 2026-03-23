export function normalizeMovieTitle(title) {
  return (title || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[–—:'.!,?]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function mergeMovies(localMovies, detailMovies) {
  const localMap = new Map(
    localMovies.map((movie) => [normalizeMovieTitle(movie.title), movie])
  )

  return detailMovies.map((detailMovie) => {
    const localMatch = localMap.get(normalizeMovieTitle(detailMovie.title))

    return {
      ...detailMovie,
      image: localMatch?.image || null,
      description: localMatch?.description || '',
      likes: localMatch?.likes || 0,
      comments: localMatch?.comments || []
    }
  })
}