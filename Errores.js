'use strict'

try{
    let x = 10;
    // arrojar un error propio error.
    throw 'mi error';
}catch(error){
    console.log(error);
}finally{
    console.log('final de la revision')
}
console.log('continuamos...');

let resultado = 'hola';
try{
    if( isNaN(resultado)) throw 'no es un numero';
    else if (resultado === '') throw 'cadena vacia';
}catch(error){
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}








