// Search data from API
fetch('https://api.themoviedb.org/3/movie/popular?api_key=17c89d9fa3c16b97f05929af9001eb2d&language=es-ES&page=1')
.then((respuesta)=>{
  return respuesta.json()
})
.then((moviesData)=>{


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
// first movie
frMovie(newList);
   //  fin first movie 
// moviesAll 
  gallery.innerHTML="";
  newList.forEach((pelicula, i) => {
    if(i !==0){
      showGallery(pelicula);
    }
  })//fin moviesAll
} //fin filterList
})//fin .then
  
  
  
  
  
  
  
  
  