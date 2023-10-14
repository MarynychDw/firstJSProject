const numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const film1 = prompt("Один из просмотренных фильмов ?", ""),
	grade1 = prompt("Насколько оцените его ?", ""),
	film2 = prompt("Один из просмотренных фильмов ?", ""),
	grade2 = prompt("Насколько оцените его ?", "");

personalMovieDB.movies[film1] = grade1;
personalMovieDB.movies[film2] = grade2;



console.log(personalMovieDB);


