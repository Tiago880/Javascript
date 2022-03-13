// 1) Dado um vetor de números,como poderia ser realizada 
// a soma de todos os valores utilizando reduce.

const vetor = [2,4,6,7,8,9]

const adicao = function(valorAcumulado, valorAtual){
  return valorAcumulado + valorAtual

}
//valor acumulado começa com zero
const soma = vetor.reduce(adicao, 0);


return console.log('A soma eh : ',soma );