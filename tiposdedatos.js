// Tipos de datos
var nombre = "Roddy";
console.log(nombre);
console.log(typeof nombre);

var numero = 25;
console.log(numero);

var objeto = {
  nombre: "Roddy Rafael",
  apellido: "Tejeda Rosario",
  telefono: "829-758-0945",
};
console.log(objeto);
console.log(typeof objeto);

// typeof = te dice el tipo de la variable.
// Js no diferencia entre Float o Int, para el es Number
nombre = 10;
console.log(typeof nombre);

// Las variables que almacenan Bool se les llama Banderas
var BanderasT = true;
var BanderasF = false;
console.log(typeof BanderasT);
console.log(BanderasT);
console.log(typeof BanderasF);
console.log(BanderasF);

function miFuncion() {}
console.log(typeof miFuncion);
console.log(miFuncion);

// se usa para crear un valor unico a una var
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);
console.log(simbolo);

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
// Las clases en JS son Funciones.
console.log(typeof Persona);
console.log(Persona);

var x;
console.log(typeof x);
console.log(x);

var y = null;
console.log(typeof y);
console.log(y);

var autos = [
  "Mustang",
  "BMW",
  "Chevrolet Camaro",
  "Roll Royce",
  "Mercedez Bens",
];
// Los array en JS son Objetos.
console.log(typeof autos);
console.log(autos);

var z = '';
console.log(typeof z);
console.log(z);









