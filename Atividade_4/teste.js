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
    nomes.slice()
      while(true){
        let hobbie = prompt('Digite o hobbie: ')
        if(hobbie == "f"){
            break
        }
        hobbies.push(hobbie) 
        hobbies.slice()
    }
    lista_mestre[0].push(nomes)
    lista_mestre[1].push(hobbies)
}
console.log(lista_mestre)