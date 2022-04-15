// https://www.beecrowd.com.br/judge/pt/problems/view/1151

/*
0 1 1 2 3

0 - numeroAnterior
1 - numeroAtual
numeroSeguinte = 0 + 1 = 1

1 - numeroAnterior
1 - numeroAtual
numeroSeguinte = 1 + 1 = 2

1 - numeroAnterior
2 - numeroAtual
numeroSeguinte = 1 + 2 = 3
*/

let n = 5;
let numeroAnterior = 0;
let numeroAtual = 1;
let numeroSeguinte = numeroAnterior + numeroAtual; // 0 + 1 = 1
let saida = ''
if (n >= 1) saida = numeroAnterior.toString(); // n > 0, então n é 1, 2, 3... 
if (n >= 2) saida += ' ' + numeroAtual.toString();
if (n >= 3) saida += ' ' + numeroSeguinte.toString();

// n = 4 -> i = 1; 1 < n - 3 < 4 - 3 < 1
for (let i = 0; i < n - 3; i++) {
    numeroAnterior = numeroAtual; // 1
    numeroAtual = numeroSeguinte; // 1
    numeroSeguinte = numeroAnterior + numeroAtual; // 2
    saida += ' ' + numeroSeguinte.toString();
}

console.log(saida);
