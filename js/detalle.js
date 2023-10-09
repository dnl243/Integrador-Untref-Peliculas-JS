let code = location.search;
// console.log(code);
let codeSelected = new URLSearchParams(code);
// console.log(codeSelected);
let codeMovie = codeSelected.get('codigo');//codigo es la clave que ponemos en la URL
console.log(codeMovie);
let movie;
const movieDetailHTML = document.querySelector('#movie-detail');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=es-ES&page=1')
.then((respuesta)=>{
  return respuesta.json()
})
.then((moviesData)=>{
  console.log(moviesData.results);
function findMovie(mData) {
  return mData.id == codeMovie;
}
movie = moviesData.results.find(findMovie);
  console.log(movie);
// first movie
  movieDetailHTML.innerHTML =`
    <div class="card mb-3 bg-transparent border-0 w-75 mt-5">
      <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="card-img-top rounded-4" alt="${movie.title}">
      <div class="card-body container text-black fw-bold cont-detail">
        <h2 class="card-title">${movie.title}</h2>
        <p class="card-text h5">${movie.overview}</p>
        <div class="d-flex justify-content-evenly w-100" >
          <p class="card-text"><small>Titulo original: ${movie.original_title}</small></p>
          <p class="card-text"><small>Lanzamiento: ${movie.release_date}</small></p>
        </div>
        <a href="#" class="btn btn-dark btnAddToList">Agregar a mi lista</a>
      </div>
    </div>`; //end first movie 
    
    btnAddToList = document.querySelector('.btnAddToList').addEventListener('click', addToList )//end addEventListener
  })//end .then
  
  function addToList (){
let listJS;
  setTimeout(()=>{
      let listFromLocal = localStorage.getItem('listMovies');
      if (listFromLocal === null) {
        listJS = [];
      }else{
        listJS = JSON.parse(listFromLocal)
      }
      listJS.push(movie);
      localStorage.setItem('listMovies',JSON.stringify(listJS));
      Swal.fire({
        icon: 'success',
        title: 'Pelicula agregada a tu lista!!',
        showConfirmButton: false,
        timer: 1500
      })
  })//end setTimeout
}








