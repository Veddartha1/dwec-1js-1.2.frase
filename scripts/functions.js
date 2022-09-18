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
	palabras = palabras.map(palabra => palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1));
	return palabras.join(' ');
}

function letrasReves(cadena) {
	let letras = cadena.split('');
	letras = letras.reverse();
	return letras.join('');
}

function palabrasReves(cadena) {
	let palabras = cadena.split(' ');
	palabras = palabras.reverse();
	palabras = palabras.join(' ');
	return palabras;
}

function palindromo(cadena) {
	cadena = cadena.toLocaleLowerCase();
	cadena = cadena.replaceAll(' ', '');
	return cadena == letrasReves(cadena);
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