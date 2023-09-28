/* 2) A partir do array [5,12,20,7,9], crie uma variável “primeiro” que recebe a primeira posição do vetor e outra variável “restante” que recebe todo o restante dos dados
- Preferencialmente usando os conceitos de Rest/Spread (caso não consiga pode ser utilizando qualquer método - só lembrando que deve funcionar para qualquer array de números)
 */

const array = [5, 12, 20, 7, 9]

function quebrarArray(array) {
    return [array[0], ...array.slice(1)]  // pega primeiro campo do vetor e depois utiliza slice com spread para copiar os demas valores a partir do primeiro valor. Utiliza return para trazer o array quebrado em 2 - Primeiro e Restante-
}
const [primeiro, ...restante] = quebrarArray(array) // utiliza a função quebrar array e armazena os valores na variavél primeiro e restante, como solicitado. A primeira consante "Primeiro" recebe somene 1 valor e restante recebe um spread que é um vetor com varios valores.
console.log(primeiro)
console.log(restante)