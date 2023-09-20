/* 2. Crie uma função que recebe 2 valores: número e o limite, sua função deve criar uma tabuada do número que foi informado e que vai de 1 até limite.
Ex: Número 2, limite 2
1x2 = 2
2x2 = 4 */

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

