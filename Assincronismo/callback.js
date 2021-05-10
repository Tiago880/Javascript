const fs = require('fs');


console.log("Inicio");

// console.log(fs.readdirSync('./'));

//Quero ler/saber o que tem dentro desse
//diretório
fs.readdir('./',function(err,lista){
if(err){
  console.log("Erro", err);
} else{
console.log(lista);
}
});
console.log("Fim");

