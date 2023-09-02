inicio:
for (let i = 0; i <= 10; i++) {
    if(i % 2 == 0){
        console.log(i);
        // detiene el codigo al ejecutar la 1era iteracion.
        continue inicio;
    }
}
console.log("fin");

// do {
//   console.log("iteracion: " + contador);
//   contador++;
// } while (contador < 3);
// console.log("fin")

// while(contador < 3){
//     console.log("iteracion: " + contador);
//     contador++;
// }
// console.log("fin")
