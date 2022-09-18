'use strict'

let cadena = prompt("Introduce una cadena");

iniciar(cadena);

function iniciar(cadena) {
    console.log("letras de frase devuelve " + letras(cadena));
    console.log("palabras devuelve " + palabras(cadena));
    console.log("maysc devuelve " + maysc(cadena));
    console.log("titulo devuelve " + titulo(cadena));
    console.log("letrasReves devuelve " + letrasReves(cadena));
    console.log("palabrasReves devuelve " + palabrasReves(cadena));
    console.log((palindromo(cadena)) ? "Un palíndromo devuelve TRUE" : "Un no palíndromo devuelve FALSE");
}