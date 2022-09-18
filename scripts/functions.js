'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	return cadena.split(' ').length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	cadena = cadena.split(' ');
	cadena = cadena.map(palabra => palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1));
	return cadena.join(' ');
}

function letrasReves(cadena) {
	return cadena.split('').reverse().join('');
}

function palabrasReves(cadena) {
	return cadena.split(' ').reverse().join(' ');
}

function palindromo(cadena) {
	cadena = cadena.toLocaleLowerCase().replaceAll(' ', '');
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