function multiplicar(a, b) {
    let c = 0;  // Inicializamos c en 0
    let i = 0;  // Inicializamos el contador en 0

    // Usamos un ciclo while para sumar b, a veces
    while (i < a) {
        c += b;  // Sumamos b a c en cada iteración
        i++;     // Incrementamos el contador en cada iteración
    }

    return c;  // Devolvemos el resultado de la multiplicación
}

console.log(multiplicar(43, 100));  // Salida: 4300