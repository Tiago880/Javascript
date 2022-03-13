
const a = {
  nome: 'Tiago',
  sobrenome : 'Santos'
};
//const b = a;
//console.log(a);
//console.log(b);
const b = {...a};
a.sobrenome = 'Cruz';
console.log(a);
console.log(b);

