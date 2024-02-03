// api key  from TMDB
const api = "api_key=9847f108ecd8cc7d9b0efd9fef455308";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w500"; // You can change "w185" to your preferred size

// requests for movies data

const requests = {
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchThriller: `${base_url}/discover/movie?${api}&with_genres=53`,
  fetchwaar: `${base_url}/discover/movie?${api}&with_genres=10752`,
  fetchScience: `${base_url}/discover/movie?${api}&with_genres=878`,
  fetchCrime: `${base_url}/discover/movie?${api}&with_genres=80`,
  fetchMystery: `${base_url}/discover/movie?${api}&with_genres=9648`,
  fetchWestern: `${base_url}/discover/movie?${api}&with_genres=37`,
  fetchAdventure: `${base_url}/discover/movie?${api}&with_genres=12`,
};
// used to truncate the string

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// ===========================  Banner  ========================= //
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    // every refresh the movie will be change
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");

    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  });

// ===========================   Action    ========================= //
fetch(requests.fetchActionMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      let contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      let h2 = document.createElement("h2");
      h2.className = "heading";
      contents.appendChild(h2);

      let p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      let p2 = document.createElement("p");
      p2.className = "description";
      let overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);

      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================  Comedy   ========================= //
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      let h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);

      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Horror    ========================= //
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);

      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Romance    ========================= //
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      let h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.marginBottom = "30px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);

      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// =========================== Thriller ========================= //
fetch(requests.fetchThriller)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Thriller Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   War    ========================= //

fetch(requests.fetchwaar)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "War Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Science   ========================= //

fetch(requests.fetchScience)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Science Fiction";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Crime   ========================= //

fetch(requests.fetchCrime)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Crime";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Mystery    ========================= //

fetch(requests.fetchMystery)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Mystery";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Western   ========================= //

fetch(requests.fetchWestern)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Western";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });

// ===========================   Adventure    ========================= //

fetch(requests.fetchAdventure)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Adventure";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      contents = document.createElement("div");
      contents.className = "content";

      const poster = document.createElement("img");
      poster.className = "row__poster";

      contents.appendChild(poster);
      h2 = document.createElement("h2");
      h2.className = "heading";

      contents.appendChild(h2);
      p1 = document.createElement("p");
      p1.className = "date";
      p1.innerText = `views: ${Math.round(movie.popularity)}k`
      contents.appendChild(p1);
      p1.style.padding = "8px 0px";

      p2 = document.createElement("p");
      p2.className = "description";
      overviews = movie.overview;
      overviews = truncate(overviews, 150);
      p2.innerText = overviews;
      contents.appendChild(p2);
      var s = movie.title;
      s = truncate(s, 15);
      h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(contents);
    });
  });
