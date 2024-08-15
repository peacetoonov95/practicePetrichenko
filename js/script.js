const numberOfFilms = +prompt("Как много фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const a = prompt("Один из последних просмотренных фильмов", ""),
      b = +prompt("Насколько оцените его??", ""),
      c = prompt("Еще один из последних просмотренных фильмов", ""),
      d = +prompt("Насколько оцените его??", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

