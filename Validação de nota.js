// https://www.beecrowd.com.br/judge/pt/problems/view/1117

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '-3.5\n5.5\n11\n-23\n-4\n10\n9\n0'
var lines = input.split('\n');

let notaTotal = 0;
let numeroNotas = 0;

for (let line of lines) {
    if (numeroNotas == 2) break;
    nota = parseFloat(line);
    if (nota >= 0.00  && nota <= 10.00) {
        numeroNotas++;
        notaTotal += nota;
    } else {
        console.log('nota invalida')
    }
}

media = (notaTotal / numeroNotas).toFixed(2)
console.log(`media = %s`, media)
