"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы посмотрели ?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const film = prompt("Один из просмотренных фильмов ?", ""),
			grade = prompt("Насколько оцените его ?", "");
	
		if (film != null && grade != null && film != "" && grade != "" && film.length < 50 && grade.length < 50) {
			personalMovieDB.movies[film] = grade;
		} else {
			i--;
		}
	}
}

rememberMyFilms();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) { 
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("просмотрено мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("вы киноман");
	} else {
		console.log("произошла ошибка");
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);



console.log(personalMovieDB);


