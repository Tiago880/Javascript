/**Retorne a soma do dobro de todos os pares 
 * Filtrar pares
 * Dobrar os valores
 * Reduzir (somar tudo)
 */
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numeroPares = numeros.filter(function(valor){
  if(valor % 2 === 0)
  return valor;

}).map(function(valor){
  return valor*2;
}).reduce(function(acumulador, valor){
return acumulador +=valor; 
});

console.log(numeroPares);
