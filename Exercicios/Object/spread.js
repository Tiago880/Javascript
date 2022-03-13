const nome = "Tiago Cruz";
const idade = 20;

const empresa = {
  nome : "a",
  cidade : "b",
  site : 'c',
  email: 'd'
}

const user = {
  idade, 
  ...empresa 
}

console.log(user);