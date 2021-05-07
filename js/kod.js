"use strict"

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
}


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log('Ok!');
// }
// (num == 50) ? console.log('Ok!') : console.log('Error!');


const num = 54;

switch (num) {
    case 49: 
        console.log('Nadogry');
        break;
    case 100: 
        console.log('Nadogry');
        break;
    case 50:
        console.log('Dogry');
        break;
    default:
        console.log('Tazeden synlashyn');
        break; 
}



// const mashgala = +prompt('Mashgalada nache adam bar?', '');

// const rayatlar = {
//     mashgalasany: mashgala, 
//     ejesi: {},
//     kakasy: {},
//     dogany: {},
//     jigisi: {}
// };

// const a = prompt("ejesinin ady", ''),
//       b = prompt("kakasynyn ady", ''),
//       c = prompt("doganyn ady", ''),
//       d = prompt("jigisinin ady", '');


// rayatlar.ejesi = a,
// rayatlar.kakasy = b,
// rayatlar.dogany = c,
// rayatlar.jigisi = d,

// console.log(rayatlar);