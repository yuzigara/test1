const numberOfFilms = +prompt('How many time did you watch films?');

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: {},
    privat: {}
};

// const a = prompt('What film did you watch?', '');
// const b = prompt('How much score you give?', '');
// const c = prompt('What film did you watch?', '');
// const d = prompt('How much score you give?', '');

// personalMovieDB.count = numberOfFilms;
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (i = 0; i < numberOfFilms; i++) {
    const a = prompt('What film did you watch?', '');
    const b = prompt('How much score you give?', '');
    // personalMovieDB.movies[a] = b;

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
        console.log(personalMovieDB);
    }   else{
        console.log('error entering!');
        i--;
    }
}