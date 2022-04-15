// https://www.beecrowd.com.br/judge/pt/problems/view/1133

// let entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
let entrada = '28\n15'; 
let numeros = entrada.split('\n');
x = parseInt(numeros[0]);
y = parseInt(numeros[1]);

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}

for (let i = x + 1; i < y; i++) {
    let resto = i % 5;
    if (resto == 2 || resto == 3) console.log(i);
}