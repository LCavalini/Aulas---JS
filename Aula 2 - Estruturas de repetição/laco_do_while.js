let senha = '';
let maxTentativas = 3;
let tentativa = 0;
// idêntico ao while, mas o bloco sempre é executado pelo menos uma vez; a condição é verificada ao final do bloco
do {
    senha = prompt('Insira a senha')
    tentativa++;
} while (senha != 'senhasecreta' && tentativa < maxTentativas);
if (senha != 'senhasecreta') {
    alert('Senha incorreta!');
} else {
    alert('Senha correta!');
}

