// Vendo caracter de indice [i]

//               01234567 
let umaString = "Um texto";

console.log(umaString.slice(2,7)); 
// -> fatia a string da posição 2 até a 7

console.log(umaString.charAt(6)); 
// -> imprime "t"

console.log(umaString.concat(' em um lindo dia')); 
// -> concatena

console.log(umaString.indexOf('x')); 
// -> imprime indice da letra procurada

console.log(umaString.replace('Um', 'Outra')); 
// ->Imprime Outra texto
// -> troca 'Um por "Outra"
console.log(umaString.length);
// retorna o tamanho da string

