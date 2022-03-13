function* geradora1(){
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';

}

const g1 = geradora1();
/*console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
*/
for (let valor of g1){
  console.log(valor);
}

