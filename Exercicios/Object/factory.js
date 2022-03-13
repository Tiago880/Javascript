function criaPessoa(nome, sobrenome){
  return {
    nome,
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Carla','Menezes');
console.log(p1.nomeCompleto);