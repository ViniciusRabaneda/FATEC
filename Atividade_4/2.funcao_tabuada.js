import PromptSync from "prompt-sync"
const prompt = PromptSync()
const numero = Number(prompt('Digite o valor da tabuada que deseja saber: '))
const limite = Number(prompt('Digite um limite para a tabuada: '))

tabuada(numero,limite)

function tabuada (numero, limite){  // só existe no contexto -- dentro da função
    let cont =0
    let tabuada = 0
    for (cont = 0; cont <= limite; cont++) {
        tabuada = numero * cont
        console.log(`${numero} X ${cont} = ${tabuada} `)
    }
}

