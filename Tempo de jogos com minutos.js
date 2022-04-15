// Problema: https://www.beecrowd.com.br/judge/pt/problems/view/1047

// let entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
let entrada = require('fs').readFileSync(0).toString();
let linha = entrada.split();

let hora_inicial = parseInt(linha[0]);
let minuto_inicial = parseInt(linha[1]);
let hora_final = parseInt(linha[2]);
let minuto_final = parseInt(linha[3]);

let tempo_inicial = hora_inicial * 60 + minuto_inicial;
let tempo_final = hora_final * 60 + minuto_final;

let duracao = tempo_final - tempo_inicial;

if (duracao < 0) {
    duracao = (24 * 60) - tempo_inicial + tempo_final;
} else if (duracao == 0) {
    duracao = 24 * 60;
} 

let hora_duracao = Math.floor(duracao / 60);
let minuto_duracao = duracao % 60;

console.log('O JOGO DUROU %d HORA(S) E %d MINUTO(S)', hora_duracao, minuto_duracao);