const mashgala = +prompt('Mashgalada nache adam bar?', '');

const rayatlar = {
    mashgalasany: mashgala, 
    ejesi: {},
    kakasy: {},
    dogany: {},
    jigisi: {}
};

const a = prompt("ejesinin ady", ''),
      b = prompt("kakasynyn ady", ''),
      c = prompt("doganyn ady", ''),
      d = prompt("jigisinin ady", '');


rayatlar.ejesi = a,
rayatlar.kakasy = b,
rayatlar.dogany = c,
rayatlar.jigisi = d,

console.log(rayatlar);