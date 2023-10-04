
/* 1. Crie quatro funções (somar, subtrair, dividir e multiplicar). Em seguida faça uma função chamada calcular(), essa função deve receber 3 parâmetros, valor A, valor B e a função callback que será executada. */

function soma (n1,n2){
    return n1+n2
}

function subtrair (n1,n2){
    return n1 - n2
}

function dividir (n1,n2){
    return n1/n2
}

function multiplicar  (n1,n2){  // número de argumentos da função multiplicar igual da função de callback
    return n1*n2
}

function calcular (a,b,operacao){       // recebe 2 variáveis e uma função
    return console.log(`${operacao(a,b)}`)
}

calcular(5,2,soma)
calcular(5,2,subtrair)
calcular(5,2,dividir)
calcular(5,2,multiplicar)
