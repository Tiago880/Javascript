// Função que recebe como parâmetro um objeto

function funcao({nome, sobrenome , idade}){
  console.log(nome, sobrenome, idade);
}
let obj ={nome: 'Tiago', sobrenome:'Cruz', idade: '23'}
funcao(obj);

function conta(operador, acumulador, ...numeros){
  for(let numero of numeros){
  if(operador === '+') acumulador +=numero;
}
console.log(acumulador);
}
conta ('+', 0 , 20 , 30, 40, 50);