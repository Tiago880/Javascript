function Pessoa (nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = function(){
   console.log(`${this.nome}, eu sou um metodo`); 
  };
}

const p1 = new Pessoa ('Luiz' , 'Otavio');
const p2 = new Pessoa ('Tiago', 'Santos');

p1.metodo();