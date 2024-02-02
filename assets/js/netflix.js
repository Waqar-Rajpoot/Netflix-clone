// api key  from TMDB
const api = "api_key=9847f108ecd8cc7d9b0efd9fef455308";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w500"; // You can change "w185" to your preferred size

// requests for movies data

const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,

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


  // ===========================  Netflix Origional   ========================= //
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row__title";
    title.innerText = "NETFLIX ORIGINALS";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    // console.log(row);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";

      let div1 = document.createElement("div");
      div1.className = "content_poster";
      let h2 = document.createElement("h2");  
      h2.className = 'heading';

      let contents = document.createElement("div");
      contents.className = "content";
      contents.appendChild(h2);

      div1.appendChild(contents);
      // console.log(div1);
      // console.log(movie);
      let p1 = document.createElement("p");
      let date = movie.first_air_date;
      p1.innerText =  date;
      contents.appendChild(p1);
      // console.log(date);
      p1.style.padding = "8px 0px";

      let p2 = document.createElement("p");
      let overviews = movie.overview;
      overviews = truncate(overviews, 130);
      p2.innerText =  overviews;
      contents.appendChild(p2);
      // console.log(date);

      var s = movie.name.replace(/\s+/g, "");
      s = truncate(s, 12);
      h2.innerText = s;
      // console.log(div);

      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
      
      div1.style.position = 'relative';
      // console.log(div1);
      
      contents.style.cssText = 'position: absolute; top: 50px; left: -220px; width: 170px; overflow: hidden';      
      row_posters.appendChild(div1);
      let content_poster = document.createElement('content_poster');
      div1.style.display = 'none';

      poster.addEventListener('mouseover', () => {
        div1.style.display = 'block';
      })
      poster.addEventListener('mouseout', () => {
        div1.style.display = 'none';
      })
    });
  });


  // ===========================  Top Rated    ========================= //
fetch(requests.fetchTrending)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Top Rated";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";

          let div1 = document.createElement("div");
          div1.className = "content_poster";
          let h2 = document.createElement("h2");  
          h2.className = 'heading';
    
          let contents = document.createElement("div");
          contents.className = "content";
          contents.appendChild(h2);
    
          div1.appendChild(contents);
          // console.log(div1);
          // console.log(movie);
    
          let p1 = document.createElement("p");
          let date = movie.first_air_date;
          p1.innerText =  date;
          contents.appendChild(p1);
          // console.log(date);
          p1.style.padding = "8px 0px";
    
          let p2 = document.createElement("p");
          let overviews = movie.overview;
          overviews = truncate(overviews, 130);
          p2.innerText =  overviews;
          contents.appendChild(p2);
          // console.log(date);
    
          s = movie.original_title;
          // console.log(s);
          s = truncate(s, 12);
          h2.innerText = s;

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);

       div1.style.position = 'relative';
       // console.log(div1);
       contents.style.cssText = 'position: absolute; top: 50px; left: -220px; width: 170px; overflow: hidden';
       row_posters.appendChild(div1);
       // console.log(row_posters);
       let content_poster = document.createElement('content_poster');
       div1.style.display = 'none';
 
       poster.addEventListener('mouseover', () => {
         div1.style.display = 'block';
       })
       poster.addEventListener('mouseout', () => {
         div1.style.display = 'none';
       })
    });
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
      const poster = document.createElement("img");
      poster.className = "row__poster";
      let div1 = document.createElement("div");
      div1.className = "content_poster";
      let h2 = document.createElement("h2");  
      h2.className = 'heading';

      let contents = document.createElement("div");
      contents.className = "content";
      contents.appendChild(h2);

      div1.appendChild(contents);
      // console.log(div1);
      // console.log(movie);

      let p1 = document.createElement("p");
      let date = movie.first_air_date;
      p1.innerText =  date;
      contents.appendChild(p1);
      // console.log(date);
      p1.style.padding = "8px 0px";

      let p2 = document.createElement("p");
      let overviews = movie.overview;
      overviews = truncate(overviews, 200);
      p2.innerText =  overviews;
      contents.appendChild(p2);
      // console.log(date);

      var s = movie.title;
      s = truncate(s, 20);
      h2.innerText = s;

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);

       div1.style.position = 'relative';
       contents.style.cssText = 'position: absolute; top: 50px; left: -380px; width: 300px; overflow: hidden';

       row_posters.appendChild(div1);
       // console.log(row_posters);
       let content_poster = document.createElement('content_poster');
       div1.style.display = 'none';
 
       poster.addEventListener('mouseover', () => {
         div1.style.display = 'block';
       })
       poster.addEventListener('mouseout', () => {
         div1.style.display = 'none';
       })
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
      // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";

       let div1 = document.createElement("div");
       div1.className = "content_poster";
       let h2 = document.createElement("h2");  
       h2.className = 'heading';
 
       let contents = document.createElement("div");
       contents.className = "content";
       contents.appendChild(h2);
 
       div1.appendChild(contents);
       // console.log(div1);
       // console.log(movie);

       let p1 = document.createElement("p");
       let date = movie.first_air_date;
       p1.innerText =  date;
       contents.appendChild(p1);
       // console.log(date);
       p1.style.padding = "8px 0px";
 
       let p2 = document.createElement("p");
       let overviews = movie.overview;
       overviews = truncate(overviews, 200);
       p2.innerText =  overviews;
       contents.appendChild(p2);
       // console.log(date);
 
       var s = movie.title;
       s = truncate(s, 20);
       h2.innerText = s;

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
       div1.style.position = 'relative';
       contents.style.cssText = 'position: absolute; top: 50px; left: -380px; width: 300px; overflow: hidden';

       row_posters.appendChild(div1);
       // console.log(row_posters);
       let content_poster = document.createElement('content_poster');
       div1.style.display = 'none';
       poster.addEventListener('mouseover', () => {
         div1.style.display = 'block';
       })
       poster.addEventListener('mouseout', () => {
         div1.style.display = 'none';
       })
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
      // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      
       let div1 = document.createElement("div");
       div1.className = "content_poster";
       let h2 = document.createElement("h2");  
       h2.className = 'heading';
 
       let contents = document.createElement("div");
       contents.className = "content";
       contents.appendChild(h2);
 
       div1.appendChild(contents);
       // console.log(div1);
       // console.log(movie);
 
       let p1 = document.createElement("p");
       let date = movie.first_air_date;
       p1.innerText =  date;
       contents.appendChild(p1);
       // console.log(date);
       p1.style.padding = "8px 0px";
 
       let p2 = document.createElement("p");
       let overviews = movie.overview;
       overviews = truncate(overviews, 200);
       p2.innerText =  overviews;
       contents.appendChild(p2);
       // console.log(date);
 
       var s = movie.title;
       s = truncate(s, 20);
       h2.innerText = s;
 
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);

       div1.style.position = 'relative';
       contents.style.cssText = 'position: absolute; top: 50px; left: -380px; width: 300px; overflow: hidden';
       row_posters.appendChild(div1);
       // console.log(row_posters);
       let content_poster = document.createElement('content_poster');
       div1.style.display = 'none';

       poster.addEventListener('mouseover', () => {
         div1.style.display = 'block';
       })
       poster.addEventListener('mouseout', () => {
         div1.style.display = 'none';
       })
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
      // console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";

       let div1 = document.createElement("div");
       div1.className = "content_poster";
       let h2 = document.createElement("h2");  
       h2.className = 'heading';
 
       let contents = document.createElement("div");
       contents.className = "content";
       contents.appendChild(h2);
 
       div1.appendChild(contents);
       // console.log(div1);
       // console.log(movie);
 
       let p1 = document.createElement("p");
       let date = movie.first_air_date;
       p1.innerText =  date;
       contents.appendChild(p1);
       // console.log(date);
       p1.style.padding = "8px 0px";
 
       let p2 = document.createElement("p");
       let overviews = movie.overview;
       overviews = truncate(overviews, 200);
       p2.innerText =  overviews;
       contents.appendChild(p2);
       // console.log(date);
       var s = movie.title;
       s = truncate(s, 20);
       h2.innerText = s;

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);

       div1.style.position = 'relative';
       contents.style.cssText = 'position: absolute; top: 50px; left: -380px; width: 300px; overflow: hidden';
       row_posters.appendChild(div1);
       // console.log(row_posters);
       let content_poster = document.createElement('content_poster');
       div1.style.display = 'none';
       poster.addEventListener('mouseover', () => {
         div1.style.display = 'block';
       })
       poster.addEventListener('mouseout', () => {
         div1.style.display = 'none';
       })
    });
  });



// ===========================     Documentary ========================= //
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row__poster";
      
       let div1 = document.createElement("div");
       div1.className = "content_poster";
       let h2 = document.createElement("h2");  
       h2.className = 'heading';
 
       let contents = document.createElement("div");
       contents.className = "content";
       contents.appendChild(h2);
       div1.appendChild(contents);
       // console.log(div1);
       // console.log(movie);
 
       let p1 = document.createElement("p");
       let date = movie.first_air_date;
       p1.innerText =  date;
       contents.appendChild(p1);
       // console.log(date);
       p1.style.padding = "8px 0px";
 
       let p2 = document.createElement("p");
       let overviews = movie.overview;
       overviews = truncate(overviews, 200);
       p2.innerText =  overviews;
       contents.appendChild(p2);
       // console.log(date);
       var s = movie.title;
       s = truncate(s, 20);
       h2.innerText = s;
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
       div1.style.position = 'relative';
       contents.style.cssText = 'position: absolute; top: 50px; left: -380px; width: 300px; overflow: hidden';
       row_posters.appendChild(div1);
       // console.log(row_posters);
       let content_poster = document.createElement('content_poster');
       div1.style.display = 'none';
       poster.addEventListener('mouseover', () => {
         div1.style.display = 'block';
       })
       poster.addEventListener('mouseout', () => {
         div1.style.display = 'none';
       })
    });
  });
