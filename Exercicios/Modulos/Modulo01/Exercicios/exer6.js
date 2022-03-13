// 5) Dado um vetor de valores, retorne um vetor com somente os 
// valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) 
// (Dica 1: utilize reduce, filter e keys,Dica 2: escreva console.log(objeto.keys()) 
// e veja como ele poderá te ajudar neste exercício)

const vetor = [2,1,4,6,7,8,9,12,2,2,4,9,6]

const verificado = function(agg,val){
  if(!agg[val]){
    agg[val]= {
      value : val ,
      occur : 0
    }
  }
    agg[val].occur = agg[val].occur+1
    return agg
}
const contagem = vetor.reduce(verificado,{});

const keys=Object.keys(contagem);

const unico = keys.filter(function(key){
return contagem[key].occur === 1
})

const unicosValores = unico.map(function(val){
  return contagem[val].value
})
console.log(unico,unicosValores)