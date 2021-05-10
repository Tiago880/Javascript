/** 
 * Some todos os numeros (reduce)
 * Retorne um array com os pares (Filter)
 * Retorne um array com o dobro dos valores (Map)
 */

const numeros = [70,2,4,80,10,3,2,4,100,2,4,48,38,48];
const total = numeros.reduce(function(acumulador,valor, indice, array){
acumulador +=valor;
return acumulador;
}, 0);

console.log(total);


