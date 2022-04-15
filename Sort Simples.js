// Problema: https://www.beecrowd.com.br/judge/pt/problems/view/1042

// var entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
var entrada = require('fs').readFileSync(0).toString();
var linha = entrada.split(' ');

var valores = [parseInt(linha[0]), parseInt(linha[1]), parseInt(linha[2])];
var valores_ordenados = new Array(3)

// Necessário para criar uma cópia do Array
for (var i = 0; i < valores.length; i++) {
    valores_ordenados[i] = valores[i]
}
valores_ordenados.sort((a, b) => a - b);

for (var i = 0; i < valores_ordenados.length; i++) {
    console.log(valores_ordenados[i]);
}

console.log('')

for (var i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

