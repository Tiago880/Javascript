// function teste(acao){
//   acao()
// }
// teste(()=> console.log('opa'))

const valores = [1,2,3,4,5]
const dobrar = valor => valor*2
const filtro = valor => valor % 2 === 0
const somar = (acumulado,atual) => acumulado + atual 

const final = valores.filter(filtro)
                        .map(dobrar)
                        .reduce(somar,0)
console.log(final)




