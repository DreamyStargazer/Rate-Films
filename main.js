'use strict';
// 1)
const numberOfFilms = +prompt('How many films you has been seen?', '');

// 2)
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
alert(numberOfFilms);

// 3)
const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('Ваша оценка фильма?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('Ваша оценка фильма?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;