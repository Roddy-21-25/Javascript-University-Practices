class Empleado {
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetalles() {
    return `Empleado: ${this._nombre}, sueldo: $${this._sueldo}`;
  }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    // sobre escribir
    obtenerDetalles(){
        return super.obtenerDetalles() + ` Gerente: ${this._departamento}`;
    }
}
let gerente = new Gerente('Roddy',1000,'Sistemas');
let empleado = new Empleado('Roddy',1000);

// console.log(gerente);
// console.log(gerente.obtenerDetalles());

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    // si se pone el tipo de la clase hija, detras.
    // saldra con el tipo del padre.
    if(tipo instanceof Gerente){
        console.log('Objeto = Gerente');
    }else if(tipo instanceof Empleado){
        console.log('Objeto = Empleado');
    }
}
imprimir(empleado);
imprimir(gerente);

 



