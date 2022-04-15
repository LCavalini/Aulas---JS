let input = '-5\n0\n-3\n-4\n12';
let lines = input.split('\n');

let numeroPositivos = 0;
let numeroNegativos = 0;
let numeroPares = 0;
let numeroImpares = 0;

for (let i = 0; i < 5; i++) {
    numero = parseInt(lines[i]);

    if (numero >= 0) numeroPositivos++;
    else numeroNegativos++;
    
    if (numero % 2 == 0) numeroPares++;
    else numeroImpares++;

}

console.log(numeroPositivos + ' valores positivos');
console.log(numeroPares + ' valores pares');
console.log(numeroImpares + ' valores impares');
console.log(numeroNegativos + ' valores negativos');

