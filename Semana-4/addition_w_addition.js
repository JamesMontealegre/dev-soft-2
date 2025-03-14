function suma (a,b,){
    let c = b // inicializamos con ¨c¨ con el valor de ¨b¨

    // usamos un ciclo para sumar ¨a¨veces a ¨c¨
    for (let i= 0; i < a; i++){
        c++; // incrementamos ¨c¨en 1 cada iteracion
    }

    return c; // devolvemos resultado

}
console.log(suma(100,43));
