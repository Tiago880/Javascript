// 9) Uma função é chamada da seguinte forma:
//   calculadora(10, '+', 20)
//   crie o corpo da função de forma que ela realize as 4 
//   operações aritméticas

const calculadora = (num1, op , num2) => {

  const obj = {
    '+' : (num1,num2) => num1 + num2 ,
    '-' : (num1,num2) => num1 - num2 ,
    '*' : (num1,num2) => num1 * num2 ,
    '/' : (num1,num2) => num1 / num2 ,
  }
  return obj[op](num1,num2)
  // if(op === '+'){
  //   return num1+num2
  // }
  // if(op === '-'){
  //   return num1-num2
  // }

  // if(op === '*'){
  //   return num1*num2
  // }

  // if(op === '/'){
  //   return num1/num2
  // }
} 

console.log(calculadora(2,'+',3));
