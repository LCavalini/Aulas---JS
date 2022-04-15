# Aula 1 - 12/02

1. Controle do fluxo do programa;
2. Resolução de problemas:
   1. https://www.beecrowd.com.br/judge/pt/problems/view/1035
   2. https://www.beecrowd.com.br/judge/pt/problems/view/1037
   3. https://www.beecrowd.com.br/judge/pt/problems/view/1051


## Controle do fluxo do programa

Em Javascript, os programas iniciam na primeira linha e terminam na última, de forma sequencial, caso não haja nenhum desvio no fluxo de execução. Por exemplo, o programa abaixo começa na linha 1 e termina na linha 3:

```
let idades = [17, 21];
console.log(`Com ${idades[0]}, você não atingiu a maioridade!`);
console.log(`Com ${idades[1]}, você atingiu a maioridade!`);
```

Os comandos de execução condicional **if**, **else** e **else if** alteram o fluxo do programa por meio de uma expressão de valor **true** (verdadeiro) ou **false** (falso). O bloco após um comando **if** só é executado se a expressão entre parênteses é verdadeira:

```
let idade = 17;

if (idade > 18) {
    // este bloco de código nunca será executado, porque idade > 18 = !true (não verdadeiro) = false (falso)
    console.log(`Com ${idade}, você atingiu a maioridade!`);
}
```

```
let idade = 17;

if (idade < 18) {
    // este bloco de código sempre será executado, porque idade < 18 = true (verdadeiro)
    console.log(`Com ${idade}, você não atingiu a maioridade!`);
}
```

```
let idade = 17;
let menorIdade = idade < 18;

if (menorIdade) {
    // este bloco de código sempre será executado, porque menorIdade = idade < 18 = 17 < 18 = true (verdadeiro)
    console.log(`Com ${idade}, você não atingiu a maioridade!`);
}
```

O comando **else** define que o seu bloco deve ser executado somente se a condição de if for falsa. É possível combinar else com if: else if. Neste caso, cria-se uma cadeia de condições:

```
let idade = 17;

if (Number.isNaN(idade)) {
    // se idade não for um número
    console.log('Digite um número!');
} else if (idade < 18) {
    // se !Number.isNaN(idade) e idade < 18
    console.log(`Com ${idade}, você não atingiu a maioridade!`);
} else {
    // se idade < 18 = false, ou seja, se idade >= 18
    console.log(`Com ${idade}, você não atingiu a maioridade!`);
}
```

Observe que o bloco de **else if** só é executado quando a condição anterior é falsa, assim em uma estrutura **if**, **else if** e **else** apenas um bloco é executado. Caso queira executar mais de um bloco simultaneamente, use estruturas condicionais independentes:

```
let idade = 17;

if (Number.isInteger(idade)) {
    // se idade for um número
    // este bloco será sempre executado em conjunto com um dos blocos da estrutura if...else abaixo
    console.log(`${idade} é um número!`);
}
if (idade < 18) {
    // se idade < 18
    console.log(`Com ${idade}, você não atingiu a maioridade!`);
} else {
    // se idade < 18 = false, ou seja, se idade >= 18
    console.log(`Com ${idade}, você não atingiu a maioridade!`);
}
```

O **switch** é outro comando de execução condicional. É útil para situações em que há muitas condições possíveis:

```
let linguagem = 'Javascript';

// equivale a uma estrutura if..else if: if (linguagem == 'Javascript') { } else if (linguagem == 'Java') // {} ...
switch (linguagem) {
    case 'Javascript':
        console.log('Javascript é muito usada em desenvolvimento web.');
        break;
    case 'Java':
        console.log('Java é uma linguagem apropriada para o desenvolvimento de sistemas corporativos.');
        break;
    case 'C++':
        console.log('Com C++ é possível construir sistemas críticos e softwares de alto desempenho.');
        break;
    case 'C#':
        console.log('C# é a linguagem padrão do framework .NET e assemelha-se ao Java.');
        break;
    case 'Python':
        console.log('Python é a linguagem mais aplicada em projetos de Ciência de Dados.');
        break;
}
```