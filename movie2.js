 
 
 function filterMovies() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const selectedGenre = document.getElementById('genreFilter').value.toLowerCase();
      const movies = document.querySelectorAll('.movie');
      movies.forEach(movie => {
        const title = movie.dataset.title.toLowerCase();
        const genre = movie.dataset.genre.toLowerCase();
        const matchesTitle = title.includes(input);
        const matchesGenre = selectedGenre === 'all' || genre === selectedGenre;
        movie.style.display = (matchesTitle && matchesGenre) ? 'block' : 'none';
      });
    }

    function sortMovies() {
      const select = document.getElementById('sortSelect');
      const grid = document.getElementById('movieGrid');
      const movies = Array.from(grid.getElementsByClassName('movie'));
      if (select.value === 'title') {
        movies.sort((a, b) => {
          return a.dataset.title.localeCompare(b.dataset.title);
        });
        movies.forEach(movie => grid.appendChild(movie));
      }
    }