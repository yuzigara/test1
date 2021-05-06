const adamsany = +prompt('Nache talyp bar', '');

const topar = {
    talypsan: adamsany,
    okde: {},
    yalta: {},
}

const a = prompt('Okde talybyn ady', ''),
      b = prompt('Okde talybyn yetishigi', ''),
      c = prompt('Yaltanyn ady', ''),
      d = prompt('Yaltanyn yetishigi', '');

topar.okde[a] = b,
topar.yalta[c] = d;

console.log(topar)





















// const numberofFilms = +prompt('Nache film gorduniz', '');

// const personalMovieDB = {
//     count: numberofFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// const a = prompt('In sonky goren kinon', ''),
//       b = prompt('Nahili haladynmy shony', ''),
//       c = prompt('In sonky goren kinon', ''),
//       d = prompt('Nahili haladynmy shony', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);