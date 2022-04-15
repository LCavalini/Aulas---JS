/* Problema: descobrir se os números recebidos são pares ou ímpares e mostrar o resultado na tela */

let entrada = '10\n20\n15\n17';
let linhas = entrada.split('\n');

/*
Se não existisse a estrutura de repetição for, teríamos que resolver o problema assim:

numero = parseInt(linhas[0]);

if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
else console.log(`%d é par`, numero);

numero = parseInt(linhas[1]);

if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
else console.log(`%d é par`, numero);

numero = parseInt(linhas[2]);

if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
else console.log(`%d é par`, numero);

numero = parseInt(linhas[3]);

if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
else console.log(`%d é par`, numero);
*/

// Com a estrutura de repetição, reduzimos o código e ainda podemos criar programas válidos para qualquer número de
// entradas (linhas.length)
for (let i = 0; i < linhas.length; i++) {
    // 1ª passagem: i = 0; numero = 10
    // 2ª passagem: i = 1; numero = 20
    // 3ª passagem: i = 2; numero = 15
    // 4ª passagem: i = 3; numero = 17
    numero = parseInt(linhas[i]);
    if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
    else console.log(`%d é par`, numero);
}



/*
Basicamente, é isto que o laço for faz:

let i = 0;

if (i < linhas.length) {
    numero = parseInt(linhas[i]);
    if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
    else console.log(`%d é par`, numero);
}

i++;

if (i < linhas.length) {
    numero = parseInt(linhas[i]);
    if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
    else console.log(`%d é par`, numero);
}

i++;

if (i < linhas.length) {
    numero = parseInt(linhas[i]);
    if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
    else console.log(`%d é par`, numero);
}

i++;

if (i < linhas.length) {
    numero = parseInt(linhas[i]);
    if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
    else console.log(`%d é par`, numero);
}

i++;

if (i < linhas.length) {
    numero = parseInt(linhas[i]);
    if (numero % 2 == 1) console.log(`%d é ímpar`, numero);
    else console.log(`%d é par`, numero);
}
*/
