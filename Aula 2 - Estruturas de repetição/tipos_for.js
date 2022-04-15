let linguagens = ['C++', 'Java', 'Javascript', 'Python'];

function mostrar_linguagens(elemento, indice, arranjo) {
    console.log(elemento);
}

console.log('Modo tradicional de percorrer um arranjo:')
for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
}


console.log('Modo mais elegante de percorrer um arranjo:')
for (let linguagem of linguagens) {
    console.log(linguagem);
}

console.log('Outra forma de percorrer um arranjo:')
linguagens.forEach(mostrar_linguagens);
