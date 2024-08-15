const numberOfFilms = +prompt("Как много фильмов Вы смотрели в своей жизни?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}


let i = 0;
while (i < 2) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("Оцените данный фильм", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        console.log("Error");
        i--;
      }
      i++;
    }

console.log(personalMovieDB.movies);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено слишком мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Error");
}