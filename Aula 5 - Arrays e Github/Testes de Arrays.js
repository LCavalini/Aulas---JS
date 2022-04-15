/* let vetor = Array.of(1, 2, 3);
vetor.map(x => x*x);
console.log(vetor.length)
console.log(vetor.map(x => x*x));
console.log(vetor.reduce((a, b) => a + b));
console.log(vetor.filter((x) => x % 2 == 0));
*/
let entrada = [
    [5, 2, 3],
    [6, 3],
    [5]
]
for (let i = 0; i < entrada.length; i++) {
    for (let j = 0; j < entrada[i].length; j++) {
        console.log(entrada[i], entrada[i][j]);
    }
}

function nome_funcao(param1, param2) {
    return param1 + param2;
}

x = nome_funcao(1, 2);
console.log(x);