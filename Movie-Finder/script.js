document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const results = document.getElementById('results');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const Moviename = document.getElementById('Movieinput').value.trim();
        if (Moviename) {
            searchmovies(Moviename);
        } else {
            results.innerHTML = `<div class="no1">Please enter a movie name.</div>`;
        }
    });

    async function searchmovies(Moviename) {
        try {
            results.innerHTML = `<div class="loading">Searching Movies...</div>`;
            const response = await fetch(`https://www.omdbapi.com/?apikey=14e82aca&s=${Moviename}`);
            const data = await response.json();
            if (data.response === 'False') {
                throw new Error('No Movies Found...');
            }
            display(data.Search);
        } catch (error) {
            results.innerHTML = `<div class="no1">Error Searching Movies... Please try again</div>`;
        }
    }

    function display(Movies) {
        results.innerHTML = `
        <div class="movie-grid">
            ${Movies.map((Movie) => `
                <div class="movie-card">
                    <img src="${Movie.Poster} alt="${Movie.Title}" class="img-poster"/>
                    <div class="movie-info">
                        <h3 class="movie-title">${Movie.Title}</h3>
                        <h3 class="movie-year">${Movie.Year}</h3>
                    </div>
                </div>
            `).join('')}
        </div>`;
    }
});