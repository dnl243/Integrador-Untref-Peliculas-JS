let myGallery = document.querySelector('#myGallery');
let listMovies = JSON.parse(localStorage.getItem('listMovies'))
console.log(listMovies);

if (listMovies == null) {
  myGallery.innerHTML=`
  <img src="./img/tv.png" class="w-50 rounded-4">`
}else{
  myGallery.innerHTML="";
  listMovies.forEach((pelicula) => {
    myGallery.innerHTML+=`
    <div class="card text-center col-6 col-sm-4 col-md-3 col-lg-2 p-2 bg-transparent border-0">
      <a><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" class="card-img-top rounded-2" alt="${pelicula.title}"></a>
    </div>`
  })// end forEach
  myGallery.addEventListener('click', function (movie) {
    const pelicula = movie.target.closest('.card');
    localStorage.removeItem('listMovies', pelicula.title);
    pelicula.remove();
    Swal.fire({
      icon: 'success',
      title: 'Pelicula eliminada de tu lista!!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  );
}
  
