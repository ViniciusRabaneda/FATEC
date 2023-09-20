/* Crie uma função chamada calcularPrecoComDesconto, essa função vai receber 3 parâmetros - (valor do produto, quantidade de produto e uma função callback que aplica o desconto e devolve o valor atualizado) e implementar ao menos uma chamada para a função calcularPrecoComDesconto */


import PromptSync from "prompt-sync"
const prompt = PromptSync()

function desconto(valor_desconto){ // função que recebe um valor de desconto dado pelo usuário
    let desconto = Number(prompt("Digite o valor de desconto (Apenas o valor decimal): "))
    valor_desconto = 1 - (desconto/100) // divide o valor por 100 para virar % e retira de 100%(no caso 1)
    return(valor_desconto) 

}

function calcularprecodesconto (preco,quantidade,callback) { // recebe 2 variaveis e uma função "callback" que poderia ser outro nome -- PS: O nome das variáveis na declaração da função pouco importa, pois só existem no contexto de criação.
    preco = Number(prompt('Digite o valor do produto: '))
    quantidade = Number(prompt('Digite a quantidade do produto: '))
    let preco_parcial = preco * quantidade
    let valor_final = callback()*preco_parcial // Pode ser lido também como  valor_desconto *preco_parcial
    console.log(`Preço unitário:${preco}`)
    console.log(`Quantidade:${quantidade}`)
    console.log(`Valor total:${preco_parcial}`)
    console.log(`Valor final com desconto: ${valor_final}`)
}
calcularprecodesconto(2,2,desconto) // Na chamada da função é NECESSÁRIO PASSAR O NOME DA FUNÇÃO COMO ElA FOI DEClARADA, no caso desconto e não callback (esse valor existe apenas no contexto calcularprecodesconto)