const vetor = [1,2,3,4,5,6 ]

const soma = function (a,b){
  return a+b
}
const dobrado = vetor.map(function(item){
  return {original: item, dobrado:item*2}
})

console.log(vetor, dobrado);

const dobrar = item => {
  return item*2
}

const somentePares = item =>{
  return item % 2 === 0
}

const paresDobrado = vetor.filter(somentePares).map(dobrar)

console.log('Os Pares dobrados são ', paresDobrado);

const somar =function(acumulado, atual){ return acumulado + atual}

const somatorio = paresDobrado.reduce(somar);
console.log('somar com o reduce',somatorio);