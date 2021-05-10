
/* Filtrar pessoas com mais de 5 letras no nome
**  Filtrar pessoas com mais de 29 anos
** Filtrar pessoas que tem nome com a letra "a"
*/ 
const pessoas = [
  {nome: 'Luiz' , idade : 45},
  {nome: 'Edcleuda' , idade : 24},
  {nome: 'Maria' , idade : 26},
  {nome: 'Joao' , idade : 20},
  {nome: 'Eduardo' , idade : 30},
];
//const pessoasComNomeGrande = pessoas.filter((obj)=>{
//  return obj.nome.length >= 5;
//});

 /*const nomeA= pessoas.filter(function(valor){
  return valor.nome.toLocaleLowerCase().endsWith('a');
});
*/
const maisdeTrinta = pessoas.filter(function(valor){
return valor.idade > 29;
});
//console.log(pessoasComNomeGrande);
console.log(maisdeTrinta);

