class Filme{
  constructor(titulo,ano,genero,diretor,duracao){
    this.titulo = titulo;
    this.ano = ano;
    this.diretor = diretor;
    this.duracao = duracao;
    this.atores = [];
  }
  Reproduzir(){
    console.log("Reproduzindo ...");
  }

  Pausar(){
    console.log("Pausado ||");
  }

  Avançar(){
    console.log("Avançar ||");
  }

  Fechar(){
    console.log("Fechar X");
  }

  Ficha(){
    console.log("Titulo: " + this.titulo);
  }
}


const vingadores = new Filme("Vingadores",2014, "Ação", "Alguem", "2h");
vingadores.Ficha();
console.log(vingadores);
