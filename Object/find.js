const victor = {
  nome : "victor lima",
  empresa: "Guia do programador",
  salario : 800
}

const david = {
  nome : "David",
  empresa: "Umbler",
  salario: 500
}

const erik = {
  nome: "Erik Fig",
  empresa : "Udemy", 
  salario : 700
}

const users = [victor,david,erik];

const achado = users.find(user => user.salario >= 500 && user.salario < 800);

console.log(achado);