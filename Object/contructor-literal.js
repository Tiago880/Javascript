/** Contrutor / Literal
 * 
 */
const pessoa1= new Object();
pessoa1.nome = 'Tiago';
pessoa1.sobrenome ='Cruz';
pessoa1.idade = 30;


pessoa1.falarNome = function(){
return (`${this.nome} está falando`);
};
pessoa1.getDatanascimento = function(){
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDatanascimento());

//pessoa1.falarNome();
// console.log(pessoa1.nome);
// delete pessoa1.nome;
// console.log(pessoa1.nome);






/** -----------------------------------------------------
 * Literal
 * 
const pessoa2 = {
  nome : 'Marcele',
  sobrenome: 'Santana'
};

console.log(pessoa1, pessoa2);
*/