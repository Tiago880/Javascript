/* unshifth -> adicona no indice [0]
** push -> adiciona no último indice
** pop -> remove no último indice
** shifth -> remove no indice [0]
*/ 
const nomes = [ 'Ed', 'Ana', 'Joao', 'Maria'];
const novo = [...nomes];

novo.unshift('Pedro');
nomes.push('Carlos');
novo.unshift('José');
novo.pop();
novo.shift();
console.log(nomes);
console.log(novo);


/* ----------------------------------------------
 const nomes = [ 'Ed', 'Ana', 'Joao', 'Maria'];
nomes[2]  = 'Tiago';
delete nomes[3];
console.log(nomes);

*----------------------------* ------------------
const nomes = [ 'Ed', 'Ana', 'Joao', 'Maria'];
const novo = nomes;

novo.pop();
console.log(nomes);
*/