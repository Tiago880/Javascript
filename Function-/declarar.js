// Arrow Function

const funcaoArrow =()=>{
console.log('Arrow Function');
};
funcaoArrow();

//Func dentro do OBJ
const obj = {
  // pode ser escrito tb
  // const obj={falar() { console.log('');}};
falar : function(){
  console.log('Estou falando');
}
};
obj.falar();

// Function expression
const souUmDado = function(){
  console.log('Sou um dado');
};

function executaFuncao(funcao){
  console.log('Vou executar sua função abaixo');
  funcao();
}

executaFuncao(souUmDado);

// Declaração da função ( Function hoisting)
//fala(); //-> Se declarar função hoisting, posso chamar a função encima
//function fala(){
//console.log('Oie');
//}

