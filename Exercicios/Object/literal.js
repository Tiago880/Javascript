const pessoa = {
nome: 'Tiago',
sobrenome: 'Santos',
falarNome(){
  console.log(`${this.nome} está falando`);
}
};
//const chave = 'sobrenome';
//console.log(pessoa['nome']);
//console.log(pessoa[chave]);

//delete pessoa.nome;
//console.log(pessoa.nome);

pessoa.falarNome();