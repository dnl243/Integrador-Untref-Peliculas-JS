// Search data from API
fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=es-ES&page=1')
.then((respuesta)=>{
  return respuesta.json()
})
.then((moviesData)=>{
  console.log(moviesData);
  console.log(moviesData.results);

document.querySelector('#action28').addEventListener('click', ()=> filterList(28));
document.querySelector('#adventure12').addEventListener('click', ()=> filterList(12));
document.querySelector('#animation16').addEventListener('click', ()=> filterList(16));
document.querySelector('#sF878').addEventListener('click', ()=> filterList(878));
document.querySelector('#crime80').addEventListener('click', ()=> filterList(80));
document.querySelector('#drama18').addEventListener('click', ()=> filterList(18));
document.querySelector('#family10751').addEventListener('click', ()=> filterList(10751));
document.querySelector('#fantasy14').addEventListener('click', ()=> filterList(14));
document.querySelector('#mistery9648').addEventListener('click', ()=> filterList(9648));
document.querySelector('#romance10749').addEventListener('click', ()=> filterList(10749));
document.querySelector('#thriller53').addEventListener('click', ()=> filterList(53));
document.querySelector('#horror27').addEventListener('click', ()=> filterList(27));

// filtro
function filterList(genre){
  const newList = moviesData.results.filter(movie => movie.genre_ids.includes(genre));
  console.log(newList);
// first movie
  firstMovie.innerHTML =`
    <div class="card mb-3 bg-transparent border-0 w-75">
      <div class="row g-0">
        <div class="col-sm-4">
        <a href="./detalle.html?codigo=${newList[0].id}"><img src="https://image.tmdb.org/t/p/w500${newList[0].poster_path}" alt="${newList[0].title}" class="img-fluid rounded-4"></a>
        </div>
        <div class="col-sm-8">
          <div class="card-body cont-banner">
          <h2 class="card-title banner-title">${newList[0].title}</h2>
          <p class="card-text banner-desc h5">${newList[0].overview}</p>
          <a href="./detalle.html?codigo=${newList[0].id}" class="btn btn-dark">Detalle</a>
          </div>
        </div>
      </div>
    </div>`; //  fin first movie 
// moviesAll 
  gallery.innerHTML="";
  newList.forEach((pelicula, i) => {
    if(i !==0){
      gallery.innerHTML+=`
        <div class="card text-center col-6 col-sm-4 col-md-3 col-lg-2 p-2 bg-transparent border-0">
          <a href="./detalle.html?codigo=${pelicula.id}"><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" class="card-img-top rounded-2" alt="${pelicula.title}"></a>
          <div class="card-body text-white">
          <a href="./detalle.html?codigo=${pelicula.id}" class="btn btn-dark text-center">Detalle</a>
          </div>
        </div>`
    }
  })//fin moviesAll
} //fin filterList
})//fin .then
  
  
  
  
  
  
  
  
  