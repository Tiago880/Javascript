for(let i = 0; i<= 9 ; i++){
  console.log(`Linha->[${i}]`);
}

for(let i = 0; i<= 9 ; i++){
  const num = i % 2 === 0 ? 'par' : 'ímpar';
  console.log(` A Linha->[${i}] eh um numero ${num}`);
}