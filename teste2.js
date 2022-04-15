let linguagem = 'C#';

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