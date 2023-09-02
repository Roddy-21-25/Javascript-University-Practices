// puede almacenar de diferentes tipos.
// esta forma no se usa.
let autos = new Array("BWM", "Mercedes Benz", "Munstang");

// esta es la forma actual
const autosActual = ["BWM", "Mercedes Benz", "Munstang"];
console.log(autosActual);

// Modificar el valor
autosActual[0] = 'Chevrolet Camaro'

// agregar un nuevo valor
autosActual.push('BMW');

for(let i = 0; i < autosActual.length; i++){
    console.log(autosActual[i])
}
console.log(typeof autosActual);

// para ver si es una array
console.log(Array.isArray(autosActual));
console.log(autosActual instanceof Array);

 

