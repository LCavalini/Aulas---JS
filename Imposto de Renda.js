let input = require('fs').readFileSync(0, 'utf8');
let lines = input.split('\n');

let salario = parseFloat(lines[0]);
let imposto = 0;

if (salario <= 2000.00) {
    imposto = 0;
} else if (salario <= 3000.00) {
    imposto += (salario - 2000) * 0.08;
} else if (salario <= 4500.00) {
    imposto += 1000 * 0.08;
    imposto += (salario - 3000) * 0.18;
} else {
    imposto += 1000 * 0.08;
    imposto += 1500 * 0.18;
    imposto += (salario - 4500) * 0.28;
}

if (imposto === 0) {
    console.log('Isento');
} else {
    console.log(`R$ ${imposto.toFixed(2)}`);
}
