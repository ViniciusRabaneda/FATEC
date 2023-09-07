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
