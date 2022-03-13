const user = {
  nome : "a",
  cidade : "b",
  site : 'c',
  email: 'd'
}
// Eu quero que dentro do objeto user
// pegar o campo chamado nome e transformar
// ele em uma constante
const {nome, cidade , site, email} = user;
console.log(nome,cidade,site,email);
// equivalencia
// const nome = user.nome;
// const cidade= user.cidade;
// const site = user.site;
// const email = user.email;
