// https://www.beecrowd.com.br/judge/pt/problems/view/1101

let entrada = '5 2\n6 3\n5 0';
let linhas = entrada.split('\n'); // ['5 2', '6 3', '5 0']

for (let i = 0; i < linhas.length; i++) {
    let valores = linhas[i].split(' '); // ['5', '2']
    let m = parseInt(valores[0]); // m = 5
    let n = parseInt(valores[1]); // n = 2
    if (m <= 0 || n <= 0) break;
    if (m > n) {
        let temp = m; // temp = 5
        m = n; // m = 2
        n = temp; // n = temp = 5
    }
    let stringNumeros = '';
    let soma = 0;
    // j = 2 até 5 = 2, 3, 4, 5
    for (let j = m; j <= n; j++) {
        stringNumeros += j.toString() + ' ';
        soma += j;
    }
    console.log(`${stringNumeros}Sum=${soma}`);
}