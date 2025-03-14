function restar(a, b) {
// definimos la función ¨restar¨
    let c= 0; // inicializamos c con ¨0¨

   if (a>b){
    while(a!=b){
      a--;
      c++;
    }
   }else if(b>a){
    while(a !=b) {
      b--;
      c++;
    }
    c=-c
   }
   return c;
}
  
  console.log(restar(10,15 ));  
  console.log(restar(15,10 )); 