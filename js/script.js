"use strict";

let numberOfFilms;
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели ?", "");
	
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели ?", "");
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const film = prompt("Один из просмотренных фильмов ?", "").trim(),
				grade = prompt("Насколько оцените его ?", "").trim();
		
			if (film != null && grade != null && film != "" && grade != "" && film.length < 50 && grade.length < 50) {
				personalMovieDB.movies[film] = grade;
			} else {
				i--;
			}
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) { 
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre === "" || genre == null){
				console.log("Вы ввели некоректные данные");
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("просмотрено мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
			console.log("вы киноман");
		} else {
			console.log("произошла ошибка");
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};




