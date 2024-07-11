'use strict';

function Set() {
    this.data = [];
  }

  Set.prototype.add = function (value) {
    if (this.data.indexOf(value) < 0) {
      this.data.push(value);
      return true;
    }
    return false;
  }

  Set.prototype.delete = function (value) {

    var pos = this.data.indexOf(value);
  
    if (pos > -1) {
      this.data.splice(pos, 1);
      return true;
    }
  
    return false;
  };

  Set.prototype.has = function (value) {

    if (this.data.indexOf(value) > -1) {
      return true;
    }
  
    return false;
  };

  Set.prototype.size = function () {

    return this.data.length;
  };

  Set.prototype.intersect = function (set) {

    var intersection = new Set();
  
    for (var i = 0; i < this.data.length; ++i) {
      if (set.has(this.data[i])) {
        intersection.add(this.data[i]);
      }
    }
  
    return intersection;
  };



//const D3 = require('d3');
//const Venn = require('venn.js');
//const Set = require('..');


//
// Cada elemento del array `alumnas` es un array que representa a una alumna,
// y cada elemento de este array anidado es un leguaje que le gusta a la alumna.
//
const alumnas = [
  ['JavaScript', 'HTML', 'CSS'],
  ['JavaScript', 'C'],
  ['JavaScript'],
  ['JavaScript', 'Ruby'],
  ['JavaScript', 'CSS'],
  ['HTML', 'CSS'],
  ['JavaScript', 'HTML'],
  ['JavaScript', 'HTML', 'CSS'],
  ['C']
];


//
// Creamos un objeto donde cada lenguaje será una llave y su valor será un set
// con referencias a las alumnas a las que les gusta ese leguaje.
//
const sets = alumnas.reduce((memo, alumna) => {

  alumna.forEach(lang => {

    if (!memo.hasOwnProperty(lang)) {
      memo[lang] = new Set();
    }
    memo[lang].add(alumna);
  });
  return memo;
}, {});


//
// Creamos array con las llaves de `sets`, que son los nombres de los lenguajes.
// Esto nos permite iterar fácilmente nuestro objeto `sets`.
//
console.log('sets:..',sets);
const langs = Object.keys(sets);
console.log('langs:..',langs);

//
// Iteramos sobre los idiomas para construir chart data. La data será un array
// de objetos donde cada objeto tiene una llave `sets`, que es un array con los
// nombres de los sets en cuestión, y otra `size` con el tamaño del set en caso
// de que `sets` sea sólo uno o el tamaño de la intersección si `sets` son más
// de uno.
//
// Para cada idioma:
//
// 1. añadimos un elemento a data con la información del sets
//
// 2. calculamos la intersección del set en cuestión con todos los demás y
//    añadimos un elemento a data para cada intersección.
//
const data = langs.reduce((memo, key) => {

  memo.push({sets: [key], size: sets[key].size()});

  // calcular intersección con todos los demás sets...
  langs.forEach(lang => {

    if (key === lang) {
      return;
    }
    memo.push({
      sets: [key, lang],
      size: sets[key].intersect(sets[lang]).size()
    });
  });
  return memo;
}, []);

console.log('data:..',data);
// Finalmente dibujamos la gráfica.
//D3.select("#venn").datum(data).call(Venn.VennDiagram());