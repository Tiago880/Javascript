function criaPessoa(nome, sobrenome, altura, peso){
  return {
    nome , 
    sobrenome,
    peso, 
    altura,
    fala : function(assunto){
      return `${this.nome} está falando ${assunto}`;
    },
    imc(){
      const indice = this.peso/(this.altura**2);
      return indice.toFixed(2);
    }

  };
}


const p1 = criaPessoa('Luiz' , 'Otávio', 1.72, 60);
const p2 = criaPessoa('Tiago' , 'Cruz', 1.80 , 80);

console.log(p1.fala('sobre JS'));

console.log(p1.imc()); 

console.log(p2.fala('sobre PHP'));

console.log(p2.imc());
