function Pessoa(nome, sobrenome){

this.nome =nome;
this.sobrenome = sobrenome;
// ele já faz o -> return this;
}

const p1 = new Pessoa('Tiago','Cruz');
const p2 = new Pessoa('Maria','Ana');

console.log(p1);
console.log(p2);