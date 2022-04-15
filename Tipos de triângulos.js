// Problema: https://www.beecrowd.com.br/judge/pt/problems/view/1045

// var entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
var entrada = require('fs').readFileSync(0).toString();
var linha = entrada.split(' ');

let lados = [parseFloat(linha[0]), parseFloat(linha[1]), parseFloat(linha[2])];
lados.sort((a, b) => b - a);
let A = lados[0];
let B = lados[1];
let C = lados[2];

if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
} else {
    if (A**2 == B**2 + C**2) {
        console.log('TRIANGULO RETANGULO');
    } else if (A**2 > B**2 + C**2) {
        console.log('TRIANGULO OBTUSANGULO');
    } else if (A**2 < B**2 + C**2) {
        console.log('TRIANGULO ACUTANGULO');
    }
    if (A == B && B == C) {
        console.log('TRIANGULO EQUILATERO');
    } else if (A == B || B == C || A == C) {
        console.log('TRIANGULO ISOSCELES');
    }
}
