import PromptSync from "prompt-sync"
const prompt = PromptSync()
let lista = []
let maior = 0

while (true){
    const numero = Number(prompt('Digite um valor: '))
    lista.push(numero)    
    let resposta = prompt('Deseja adicionar adicionar mais um número? [S/N]: ')
    if (resposta == 'N'){
        break
    }
}
for (let cont = 0; cont < lista.length; cont++) {
    if (lista[cont] > maior){
        maior = lista[cont]
    }       
}
    console.log(`O maior valor da lista é -- > ${maior}`)

