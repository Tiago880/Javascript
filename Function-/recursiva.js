function recursiva(max){
  if (max >= 999) return;
  
  console.log(max);
  max++;
  recursiva(max);

}

recursiva(0);