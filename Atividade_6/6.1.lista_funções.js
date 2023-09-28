/*  1) Considerando a seguinte lista de valores: [10,12,15,35,40] crie funções para devolver os dados conforme solicitado:
Uma função que devolve os valores que são maiores que a média
Uma função que devolva o menor valor da lista
Uma função que devolva o valor da soma dos itens da lista
Uma função que devolva todos os valores que são menores que 20*/

const lista = [10,12,15,35,40] 

function maiorMedia(elementos) {
    const media = elementos.reduce((soma, atual) => soma += atual, 0)/elementos.length // utilizar reduce para calcular a média e lenght para contar o tamanho dos dados (no caso 5)
    return elementos.filter(num => num > media) // filter para selecionar os valores maiores que a media
}
console.log(`Os valores maiores que a média são: ${maiorMedia(lista)}`)


function menorValor(elementos) {
    return Math.min(...elementos) // seleciona menor valor
}
console.log(`Menor valor da lista: ${menorValor(lista)}`)


function somaValores(valores) {
    return valores.reduce((somatoria, atual) => somatoria += atual, 0) // mesmo esquema da média, pega os valores do vetor e retorna um novo baseado em uma condição
}
console.log(`A soma de todos os itens é: ${somaValores(lista)}`)


function menoresVinte(valores) {
    return valores.filter(num => num < 20) // filter seleciona valores menores que 20
}
console.log(`Os valores menores que 20 são: ${menoresVinte(lista)}`)