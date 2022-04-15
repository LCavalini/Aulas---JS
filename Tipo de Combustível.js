// https://www.beecrowd.com.br/judge/pt/problems/view/1134

let entrada = '8\n1\n7\n2\n2\n4';
// let entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
let numeros = entrada.split('\n');
let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let numero of numeros) {
    if (numero == 1) alcool++;
    else if (numero == 2) gasolina++;
    else if (numero == 3) diesel++;
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: %d`, alcool);
console.log(`Gasolina: %d`, gasolina);
console.log(`Diesel: %d`, diesel);