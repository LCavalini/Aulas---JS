// Problema: https://www.beecrowd.com.br/judge/pt/problems/view/1041 

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync(0).toString();
var lines = input.split(' ');

var x = parseFloat(lines[0]).toPrecision(1);
var y = parseFloat(lines[1]).toPrecision(1);

var posicao = '';

if (x == 0 && y == 0) {
    posicao = 'Origem';
} else if (y == 0) {
    posicao = 'Eixo X';
} else if (x == 0) {
    posicao = 'Eixo Y';
} else if (x > 0 && y > 0) {
    posicao = 'Q1';
} else if (x < 0 && y > 0) {
    posicao = 'Q2';
} else if (x < 0 && y < 0) {
    posicao = 'Q3';
} else if (x > 0 && y < 0) {
    posicao = 'Q4';
}

console.log(posicao)

