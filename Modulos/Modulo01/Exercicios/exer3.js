// 3) Dado um vetor de números, como poderia ser realizada a soma de 
// todos os valores ímpares utilizando reduce e filter.

const vetor = [2,4,6,7,8,9,12]

const impares = vetor.filter(function(item){
return item % 2 == 1
});

const somadora =(function(valorAcumulado,valorAtual){
  return valorAcumulado + valorAtual
});

const soma = impares.reduce(somadora,0);

console.log('A soma dos impares eh : ',soma);
