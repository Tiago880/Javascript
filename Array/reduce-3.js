/** Retorne a pessoa mais velha
 * 
 */

const pessoas = [
  {nome: 'Luiz' , idade : 45},
  {nome: 'Edcleuda' , idade : 24},
  {nome: 'Maria' , idade : 26},
  {nome: 'Joao' , idade : 20},
  {nome: 'Eduardo' , idade : 30},
];
const pessoaMaisVelha = pessoas.reduce(function(acumulador,valor, indice){
 if(acumulador.idade > valor.idade) return acumulador;
 return valor;
});

console.log(pessoaMaisVelha);