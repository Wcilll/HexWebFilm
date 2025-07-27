// ✅ API Key dari TMDB
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDdjOTU5MzNmNTA0Yzk5YzQ3MDY3OWMzMTFhYWNmOSIsIm5iZiI6MTc1MzI0NzY3Ny4zMjMsInN1YiI6IjY4ODA2ZmJkYTg1NGU0MmViM2Y3NzViMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.45RwLCC11Fd3UDKc8BhHGTl1IMoNC_JOCIuLH_ud9EI";

// ✅ Ambil data film dari endpoint discover
fetch("https://api.themoviedb.org/3/discover/movie", {
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const movieList = document.getElementById("movie-list");

    // ✅ Render hasil data movie ke dalam elemen HTML
    movieList.innerHTML = data.results
      .map((movie) => {
        return `
        <div class="image-film">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
          movie.title
        }" />
          <div class="title-film">
            <h3>${movie.title}</h3>
            <div class="rating-detail-footer">
              <div class="rating">
                <span>★</span>
                <span>${movie.vote_average.toFixed(1)}</span>
              </div>
              <span>${
                movie.release_date ? movie.release_date.slice(0, 4) : "N/A"
              }</span>
            </div>
          </div>
        </div>`;
      })
      .join("");
  })
  .catch((error) => {
    console.error("Gagal mengambil data film:", error);
  });
