'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	let palabras = cadena.split(' ');
	return palabras.length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	let palabras = cadena.split(' ');
	let palabrasFinal = [];
	palabras.forEach((palabra) => {
		palabra = palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1);
		palabrasFinal.push(palabra);
	})
	return palabrasFinal.join(' ');
}

function letrasReves(cadena) {
	let letras = cadena.split('');
	let letrasReversas = letras.reverse();
	return letrasReversas.join('');
}

function palabrasReves(cadena) {
	let arrayPalabras = cadena.split(' ');
	let palabrasFinal = [];
	arrayPalabras.forEach((palabra) => {
		palabrasFinal.push(palabra);
	})
	palabrasFinal = palabrasFinal.reverse();
	return palabrasFinal.join(' ');
}

function palindromo(cadena) {
	let cadenaMinusculas = cadena.toLocaleLowerCase();
	cadenaMinusculas = cadenaMinusculas.replaceAll(" ", "");
	let cadenaInvertida = letrasReves(cadenaMinusculas);
	return cadenaMinusculas == cadenaInvertida;
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}