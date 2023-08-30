// salario
// aumento (porcentagem)
// novo salario
// Mostrar no console o texto:
// Salário antigo: VALOR e Novo salário: VALOR

const salario_antigo = 200 
const aumento = 0.10 //10%
let novo_salario = (salario_antigo * (1+aumento))
console.log(`O salário antigo era R$ ${salario_antigo.toFixed(2)} e o novo salário é de R$ ${novo_salario.toFixed(2)}`) // .tofixed() controla casas decimais