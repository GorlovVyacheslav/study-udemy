const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('normas');
  } else {
    console.log('error');
    i--;
  }
}
if (personalMovieDB.count < 10) {
  console.log('Prosmotreno malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('you classical zritel');
} else if (personalMovieDB.count >= 30) {
  console.log('you kinoman');
} else {
  console.log('this error');
}
console.log(personalMovieDB);
