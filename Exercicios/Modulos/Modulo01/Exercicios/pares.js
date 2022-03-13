// 2) Dado um vetor de números, como poderia ser realizada a soma de todos os 
// valores pares utilizando reduce e filter.​

const vetor = [2,4,6,7,8,9,12]

const pares = vetor.filter(function(item){
return item % 2 !== 0
});

const somadora =(function(valorAcumulado,valorAtual){
  return valorAcumulado + valorAtual
});

const soma = pares.reduce(somadora,0);

console.log('A soma dos pares eh : ',soma);
