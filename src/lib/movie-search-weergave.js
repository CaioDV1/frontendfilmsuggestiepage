export function renderMovieSearchLoading(container) {
  container.innerHTML = '<p>Zoeken...</p>'
}

export function renderMovieSearchEmpty(container) {
  container.innerHTML = '<p>Geen resultaten gevonden.</p>'
}

export function renderMovieSearchError(container) {
  container.innerHTML = '<p>Zoeken mislukt.</p>'
}

export function renderMovieSearchResults(container, results) {
  container.innerHTML = results
    .map(
      (movie, index) => `
        <article class="movie-search__result">
          <p><strong>${movie.title}</strong></p>
          <p>QID: ${movie.wikidataId}</p>
          <button
            class="movie-search__add-button"
            type="button"
            data-result-index="${index}"
          >
            Toevoegen aan archief
          </button>
        </article>
      `
    )
    .join('')
}