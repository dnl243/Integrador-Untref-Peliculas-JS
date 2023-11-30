// btn inicio
let index = document.querySelector('#inicio');
index.addEventListener('click', ()=>{
    window.location.href="./index.html";
})
// First movie
let firstMovie = document.querySelector('#fr-movie');
// Gallery
let gallery = document.querySelector('#gallery');
// Search data from API
fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=es-ES&page=1')
.then((respuesta)=>{
  return respuesta.json()
})
.then((moviesData)=>{
// first movie
frMovie(moviesData.results);
gallery.innerHTML="";
// moviesTopFive
let moviesTopFive = document.querySelector('#moviesTopFive');
moviesTopFive.addEventListener('click', ()=>{
    frMovie(moviesData.results);
    gallery.innerHTML="";
    moviesData.results.forEach((pelicula, i) => {
      if(i !==0 && i < 5){
        showGallery(pelicula);
}})
    })//fin moviesTopFive
// moviesTopTen
let moviesTopTen = document.querySelector('#moviesTopTen');
moviesTopTen.addEventListener('click', ()=>{
  frMovie(moviesData.results);
  gallery.innerHTML="";
  moviesData.results.forEach((pelicula, i) => {
      if(i !==0 && i < 10){
        showGallery(pelicula);
        }
      })
    })//fin moviesTopTen 
    // moviesAll 
    let moviesAll = document.querySelector('#moviesAll');
    moviesAll.addEventListener('click', ()=>{
      frMovie(moviesData.results);
      gallery.innerHTML="";
      moviesData.results.forEach((pelicula, i) => {
        if(i !==0){
          showGallery(pelicula);
      }
    })
  })//fin moviesAll
})//fin .then((moviesData)
.catch((error)=>{
  console.log('Ha courrido un error '+error)
})

function frMovie(m) {
  firstMovie.innerHTML =`
  <div class="card mb-3 bg-transparent border-0 w-75">
    <div class="row g-0">
      <div class="col-sm-4">
        <a href="./detalle.html?codigo=${m[0].id}"><img src="https://image.tmdb.org/t/p/w500${m[0].poster_path}" alt="${m[0].title}" class="img-fluid rounded-4"></a>
      </div>
      <div class="col-sm-8">
        <div class="card-body cont-banner">
          <h2 class="card-title banner-title">${m[0].title}</h2>
          <p class="card-text banner-desc h5">${m[0].overview}</p>
          <a href="./detalle.html?codigo=${m[0].id}" class="btn btn-dark">Detalle</a>
        </div>
      </div>
    </div>
  </div>`;
}

function showGallery(pelicula) {
  gallery.innerHTML+=`
  <div class="card text-center col-6 col-sm-4 col-md-3 col-lg-2 p-2 bg-transparent border-0">
    <a href="./detalle.html?codigo=${pelicula.id}"><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" class="card-img-top rounded-2" alt="${pelicula.title}"></a>
    <div class="card-body text-white">
      <a href="./detalle.html?codigo=${pelicula.id}" class="btn btn-dark text-center">Detalle</a>
    </div>
  </div>`
}

// Series out of service
let dontWork = document.querySelector('.dontWork');
dontWork.addEventListener('click', ()=>{
  Swal.fire({
    title: 'Sorry!',
    text: '"Series" is under development',
    imageUrl: 'https://media.tenor.com/MLJck5Gdw-oAAAAC/angry.gif',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
})








