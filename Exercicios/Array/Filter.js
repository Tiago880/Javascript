/* Filter , map , reduce
**Retorne os números maiores que 10
*/
const numeros = [70,2,4,80,10,3,2,4,100,2,4, 48 , 38];

const numerosFiltrados = numeros.filter((valor, indice, array)=>{
  console.log(valor,indice);
  return valor > 10;
  });
console.log(numerosFiltrados);

/* Também pode ser feito assim

function callbackFilter (valor){
return valor > 10;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
--------------Maneira código longo -------------
function callbackFilter (valor, indice, array){
if(valor > 10){
  return true;
} else {
  return false;
}

}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/