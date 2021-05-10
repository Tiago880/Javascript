const data = new Date('1987-04-22 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){

case 0 :
  diaSemanaTexto = console.log('Domingo');
    break;

case 1 :
  diaSemanaTexto = console.log('Segunda');
      break;

case 2 :
    diaSemanaTexto = console.log('Terça');
      break;

case 3 :
    diaSemanaTexto = console.log('Quarta');
      break;

case 4 :
    diaSemanaTexto = console.log('Quinta');
      break;

case 5 :
    diaSemanaTexto = console.log('Sexta');
      break;
case 6 :
    diaSemanaTexto = console.log('Sábado');
      break;    
  
}