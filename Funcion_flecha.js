function miFuncion1(){
    console.log('Funcion 1')
}

function miFuncion2(){
    console.log('Funcion 2')
}

miFuncion1();
miFuncion2();

// Funcion de tipo CallBack
// llamar una funcion dentro de otra funcion.
function imprimir(message){
    console.log(message);
}

function sumar(a, b, callback){
    let res = a + b;
    callback(res);
}

sumar(10, 15, imprimir)

// llamadas asincronas
// las llamadas callback se usan para metodos async


















