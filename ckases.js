class Persona {
  static contadorObjetosPersona = 10;

  // metodo constante
  static get MAX_OBJ(){
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  // metodo de la clase Object.
  toString(){
    return this.nombreCompleto();
  }

  static saludar(){
    console.log("Saludos")
  }
}
let persona1 = new Persona("roddy", "rafael");
Persona.saludar();
console.log(Persona.contadorObjetosPersona)
console.log(persona1.nombre);
console.log((persona1.nombre = "Roddy Rafael"));

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    // enviar los valores del Padre
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }

}

let empleado = new Empleado("rafael", "tejeda", "informatica"); 
console.log(empleado);
console.log((empleado.nombre = "roddy"));
console.log((empleado.apellido = "tejeda"));
console.log(empleado.nombreCompleto());

// vamos a sobre escribir este metodo base de Object.
console.log(empleado.toString());
console.log(Persona.MAX_OBJ);
