/* Utilizando forEach percorra o seguinte array imprimindo apenas os valores que são maiores que 10:
const arrayPrint = [
          [5,10,12],
          [2,9,11],
          [15,8,6]
    ]
*/

const arrayPrint =[
    [5,10,12],
    [2,9,11],
    [15,8,6]
]

arrayPrint.forEach(grupo_array => { // Percorre os arrays dentro do arrayPrint que são 3 grupos 
    grupo_array.forEach(array =>{ // Entra em cada grupinho de array e varre seus valor. EX: 5 depois 10 e depois 12 
        if (array > 10){ // verifica se o valor atual é maior que 10 e imprime o valor
            console.log(`${array}`)
        }
    });
});