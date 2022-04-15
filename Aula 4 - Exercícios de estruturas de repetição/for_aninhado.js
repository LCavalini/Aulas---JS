let entrada = '3\n6.5 4.3 6.2 1.0\n5.1 4.2 8.1\n8.0 9.0 10.0 1.5 0';
let linhas = entrada.split('\n');
let numeroLinhas = parseInt(linhas[0]);

for (let i = 1; i <= numeroLinhas; i++) {
    // i = 1 valores = [6.5, 4.3, 6.2]
    // i = 2 valores = [5.1, 4.2, 8.1]
    // i = 3 valores = [8.0, 9.0, 10.0]
    let valores = linhas[i].split(' ');
    for (let j = 0; j < valores.length; j++) {
        // i = 1, j = 0 6.5
        // i = 1, j = 1 4.3
        // i = 1, j = 2 6.2
        // i = 2, j = 0 5.1
        // ...
        console.log(valores[j])
    }
}