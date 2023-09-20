/* 4. Crie um código que vai ficar executando pedindo o nome do cliente (enquanto não digitar “” ele segue) e que vai pedir uma lista de hobbies da pessoa (enquanto não digitar “” vai adicionar os hobbies). No final escreva o nome da pessoa e seu hobbies no seguinte formato: Nome | Hobby 1, Hobby 2, … */

import PromptSync from "prompt-sync"
const prompt = PromptSync()
let nomes = []
let hobbies = []
let lista_mestre = []

while (true){
    let nome = prompt('Digite o nome: ')
      if (nome == "f"){
        break
    }

    nomes.push(nome)
      while(true){
        let hobbie = prompt('Digite o hobbie: ')
        if(hobbie == "f"){
          lista_mestre.push(nomes.slice())
          nomes = []  
          break
        }

        hobbies.push(hobbie)

    }
    lista_mestre.push(hobbies.slice())
    hobbies = []
}
for (let index = 0; index < lista_mestre.length; index++) {
  if (index % 2 == 0)
    console.log(`Nome: ${lista_mestre[index]}`)
  else{
    console.log(`hobbies:${lista_mestre[index]}`)
    } 
}
