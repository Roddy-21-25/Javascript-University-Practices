// un objeto puede tener propiedades y metodos
let persona = {
  nombre: "Roddy",
  apellido: "Tejeda",
  email: "roddy@gmail.com",
  edad: 21,
  idioma: 'es', // lo correcto es usar Mayusculas
  get lang(){
    return this.idioma.toUpperCase();
  },
  // Modificar
  set lang(lang){
    this.idioma = lang.toUpperCase();
  },
  // metodo
  nombreCompleto: function () {
    return "Nombre Completo: " + this.nombre + " " + this.apellido;
  },
  get nombreCompletotwo(){
    return this.nombre + " " + this.apellido;
  }
};

console.log(persona.idioma);
console.log(persona.lang); // Get
persona.lang = 'en' // Set
console.log(persona.idioma);
console.log(persona.lang); // Get


// en algunos casos esto genera Object Object
console.log(persona);
// Soluciones
console.log(Object.values(persona))
console.log(JSON.stringify(persona))


let persona2 = new Object();
persona2.nombre = 'roddy';
persona2.apellido = 'tejeda';

console.log(persona2);


















