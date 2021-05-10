
const pessoa = {
nome: 'Tiago',
sobrenome : 'Cruz',
idade:30
};

for(let chaves in pessoa){
  console.log(chaves, pessoa[chaves]);
}
/* const frutas = ['Pera', 'Uva' , 'Maçã'];
for(let i =0 ; i < frutas.length ; i++){
  console.log(frutas[i]);
}

for(let indice in frutas){ 
  console.log(frutas[indice]);
}

*/