/* Crie um código com Node.js que recebe (usando Prompt-Sync) o ano de nascimento do usuário e em seguida calcule e exiba a idade do usuário. */

import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync()
const aumento = 1.1 //10%
const salario = Number(prompt('Digite seu salário: '))


const novo_salario = salario*aumento

console.log(`Seu salário era ${chalk.blue(`R$`,salario)}, seu aumento foi de 10% e o novo salário é R$ ${chalk.green(`R$`,novo_salario.toFixed(2))}`)