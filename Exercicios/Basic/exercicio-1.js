/*
* Tiago Santos Cruz tem 30 anos , pesa 60 kg tem 1.8 de altura e
* seu IMC é de 25.925
* Tiago Santos nasceu em 1997
*
* -> Vamos usar template strings
*/
const nome = 'Tiago Santos';
const sobrenome = 'Cruz';
const idade = 30;
const peso = 60;
const altura = 1.8;
let anoNascimento= 1997;

let imc = (peso/(altura*altura));
console.log(`${nome} ${sobrenome} tem ${idade} anos de idade,
pesa ${peso} de altura e seu IMC é de : `,imc);
console.log(nome+` nasceu em ${anoNascimento}`)