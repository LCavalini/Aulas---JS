var input = '23'
var lines = input.split('\n');

let numero = parseInt(lines[0]);

let max = 6

if (numero % 2 == 1) {
    console.log(numero);
    max--;
}

for (let i = 0; i < max; i++) {

    if (numero <= 1 || numero >= 100) break;

    if (numero % 2 == 0) numero++;
    else numero += 2;
    console.log(numero);
}