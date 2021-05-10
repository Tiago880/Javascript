let num1 = 1; //number
let num2 = 2.5; //number
let num3 = 25534.68232 // number
console.log(num1.toString()+ num2);
/* -> toString converte temporariamente o número para uma string
*  -> console.log vai imprimir 12.5 ´porque concatenou
*  -> com a string
*/
console.log(typeof num1);
console.log(num3.toFixed(2));
// -> .toFixed arredonda o nuber em x casas decimais
console.log(Number.isInteger(num3));
console.log(Number.isInteger(num1));
// -> isInteger retorna true para inteiros e false para valores quebrados
