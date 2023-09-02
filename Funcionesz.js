// Se usa Camel sintax
function miFuncion(a, b){
    return a + b;
}

// se puede llamar tantas veces como queramos.
console.log(miFuncion(15, 10));

// para llamarla se usa el parentesis al final 
// pero no se puede reutilizar o volver a mandar a llamar.
// ya que no se puede asignar a una variable.
(function(){
    console.log('Ejecutando la funcion');
})();

(function(a, b){
    console.log(a + b);
})(10, 15);

// las funciones son objetos y como tal tiene metodos.
function miFunciontwo(a, b){
    // arguments se usa dentro de la funcion.
    console.log(arguments.length);
    return a + b;
}

miFunciontwo(10, 15);

var miFuncionTexto = miFunciontwo.toString();
console.log(miFuncionTexto);

function miFuncionThree(a, b){
    return a + b;
}

miFuncionThree(10, 15);

// usamos const porque generalmente el valor no cambia en este tipo de
// funciones
const sumarFuncionTipoFlecha = (a, b) => a + b;
console.log(sumarFuncionTipoFlecha(10, 15))

// parametros son los valores que se esperan.
// argumentos son los valores que le pasamos.

let SumarDos = function(a = 10,b = 15){ // valores por defecto.
    // el 1er valor del argumento a
    console.log(arguments[0]);
    // el 1er valor del argumento b
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b
}
console.log(SumarDos())

// paso por valor = cuando usamos tipos que no son objetos.
// y cuando pasamos un valor a una funcion para usarlo dentro.
let x = 10; // valor primitivo = sin metodo ni atributos

function cambiarValor(a){
    a = 20;
}
// paso por valor.
cambiarValor(x);
console.log(x)

// Paso por referencia.
const persona = {
    nombre : 'Roddy',
    apellido: 'Tejeda'
}

function cambiarValor(p1){
    // paso por referencia.
    p1.nombre = 'Roddy Rafael';
    p1.apellido = 'Tejeda Rosario';
}

cambiarValor(persona);
console.log(persona);













