import PromptSync from "prompt-sync"
const prompt = PromptSync()
const valor_1 = Number(prompt('Digite o primeiro valor: '))
const valor_2 = Number(prompt('Digite o segundo valor: '))
const valor_3 = Number(prompt('Digite o terceiro valor: '))

maior_numero (valor_1,valor_2,valor_3)

function maior_numero(n1,n2,n3){
    let maior = 0
    if (n1>n2 && n1>n3){
        maior = n1
    } else if (n2>n1 && n2>n3){
        maior = n2
    }else {
        maior = n3
    }   
    return console.log(`O maior número é ${maior}`)
}
