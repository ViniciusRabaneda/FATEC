import PromptSync from "prompt-sync"
import chalk from "chalk"
const prompt = PromptSync()
const nascimento = prompt('Digite o ano de seu nascimento: ')
const now = new Date
const ano_atual = now.getFullYear()
const idade = ano_atual - nascimento
console.log(`Você nasceu no ano ${chalk.red(nascimento)}, portanto tem ${chalk.blue(idade)} anos `)