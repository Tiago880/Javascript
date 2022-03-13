const pessoa = {
  nome: 'Luis',
  sobrenome : 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero : 320
  }
};

const {nome = '', sobrenome, endereco} = pessoa;
console.log(nome, sobrenome, endereco);