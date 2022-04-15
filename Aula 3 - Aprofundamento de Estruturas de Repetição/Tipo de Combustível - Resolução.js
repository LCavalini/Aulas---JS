let entrada = '8\n1\n7\n2\n2\n4';
let linhas = entrada.split('\n');
let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < linhas.length; i++) {
    linha = parseInt(linhas[i]);
    if (linha == 1) alcool = alcool + 1;
    else if (linha == 2) gasolina += 1;
    else if (linha == 3) diesel++;
    else if (linha == 4) break;
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: %d`, alcool);
console.log(`Gasolina: %d`, gasolina);
console.log(`Diesel: %d`, diesel);
