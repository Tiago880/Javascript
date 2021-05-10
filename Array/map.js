/* const numeros = [70,2,4,80,10,3,2,4,100,2,4,48,38,48];
const numerosEmDobro = numeros.map(function(valor,indice,array){
return valor * 2;
});

console.log(numerosEmDobro);
*/
// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// adicione uma chave id em cada objeto
const pessoas = [
  {nome: 'Luiz' , idade : 45},
  {nome: 'Edcleuda' , idade : 24},
  {nome: 'Maria' , idade : 26},
  {nome: 'Joao' , idade : 20},
  {nome: 'Eduardo' , idade : 30},
];

/* const retorno = pessoas.map(function(valor){
  return valor.nome;

});

console.log(retorno);
*/
/*--------------------------------------------------------------
  const idades = pessoas.map(function(valor, indice){
      delete valor.nome;
      return valor;
});

console.log(idades);
-------------------------------------------------------------------


const comIds = pessoas.map(function(valor, indice){
valor.id = indice;
return valor;
});

console.log(comIds);
-------------------------------------------------------------------
O item 3 Pode ser resolvido também dessa forma
const comIds = pessoas.map(function(valor, indice){
  const newValor = {...valor};
  newValor.id = indice;
  return valor;
});
console.log(newValor);
*/