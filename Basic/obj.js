const pessoa1={
  nome : 'Luiz',
  sobrenome: 'Miranda',
  idade : 25,

  fala(){
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos de idade`);
    
  },
  incrementaIdade(){
    ++this.idade;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



/*
const pessoa1 = {

  nome : 'Tiago',
  sobrenome : 'Santos',
  idade : '23',
};

console.log(pessoa1.nome+' '+pessoa1.sobrenome);
*------------------------------------------------------------------------------*


function criaPessoa(nome,sobrenome,idade){
 return{
  nome: nome , //-> se os valores forem iguais pode ser escrito nome,sobreno,idade
  sobrenome : sobrenome,
  idade: idade
 };
}

const pessoa1 = criaPessoa('Tiago', 'Santos', 23);
console.log(pessoa1);
*/