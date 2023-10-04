/* 2. Crie uma classe Cliente, essa classe deve ter nome, telefone, renda e e-mail como atributos e um método verificarCredito(), esse método deve retornar uma promise que retorna: Crédito aprovado (renda > 2000) ou Crédito recusado (renda < 2000) */

class cliente {
    constructor(nome, telefone, renda, email) {  // argumentos
        this.nome = nome   // this.nome recebe o argumento nome --> .nome é uma key e pode ser diferente do valor do argumento
        this.telefone = telefone
        this.renda = Number(renda)
        this.email = email
    }

    verificarCredito() {
        const minhaPromise = new Promise((resolve, reject) => {    // criar a promessa
            if (this.renda > 20000) {   // verifica se a renda do objeto (this.renda) é maior que 20000
                resolve("Credito Aprovado") // condição aceita
            }
            else {
                reject("Credito Recusado") // condição rejeitada
            }
        },1000)
        minhaPromise
            .then((respostaResolve) => {   // usado para captar a resposta do resolve
                console.log(respostaResolve) // mostra a resposta do resolve ("Credito Aprovado")
        })
        
            .catch((respostaReject) => { // usado para captar a resposta do reject 
                console.log(respostaReject)  // usado para mostrar a resposta do reject ("Credito Recusado")
        })
    }
}

const cliente1 = new cliente('Jorge','4002-8922',21000,'jorginho@gmail.com') // Cria um novo usuário utilizando a classe
const cliente2 = new cliente('Robson','9992-8922',19000,'jorginho@gmail.com') 
cliente1.verificarCredito() // executa o método verificarcredito para cliente1
cliente2.verificarCredito() // executa o método verificarcredito para cliente2

