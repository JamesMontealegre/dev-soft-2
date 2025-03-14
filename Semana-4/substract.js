function restar(a, b) {
// definimos la función ¨restar¨
    while (b !== 0) {
    //El ciclo continuará ejecutándose mientras b no sea igual a 0. En cada iteración, calcularemos una parte de la resta y lo actualizaremos, hasta que ya no quede más diferencia (es decir, cuando b sea 0).    
      // Prestamos lo que falta para hacer la resta
      let prestado = (~a) & b;
      //~a es el complemento a 1 de a. se obtiene invirtiendo todos los numeros de a
      // & b es la operacion and del complemento entre ~a y b y el resultado es uno solo si ambos bits son 1
      
      // Calculamos la "resta" sin signo
      a = a ^ b;
      
      // Preparamos el acarreo para la siguiente iteración
      b = prestado << 1;
    }
  
    return a;
    // el ciclo sigue retornando hasta que b=0 y el resultado queda siendo ¨a¨
  }
  
  console.log(restar(10, 3));  // Salida: 7