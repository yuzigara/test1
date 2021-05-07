const numberOfFilms = +prompt('How many time did you watch films?');

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: {},
    privat: {}
};

const a = prompt('What film did you watch?', '');
const b = prompt('How much score you give?', '');
const c = prompt('What film did you watch?', '');
const d = prompt('How much score you give?', '');

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);