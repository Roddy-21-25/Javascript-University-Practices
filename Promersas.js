// resolved = Funcion por si se cumple la promesa.
// rejected = Funcion por si la promesa no se cumple.
let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    // hacemos callback a las funciones.
    if(expresion){
        resolved('Resolvio correcto');
    }else{
        rejected('Se produjo un error');
    }
});

// llamar la promesa
// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

// miPromesa.then(valor => console.log(valor)
// ).catch(
//     error => console.log(error)
// );

let promesa = new Promise((revolver) => {
    // console.log('inicio');
    setTimeout(() => revolver('saludos con promesa'), 3000);
    // console.log('Fin');
});
// promesa.then(valor => console.log(valor));

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}
// miFuncionConPromesa().then(valor => console.log(valor));

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('promesa con await');
    });
    console.log(await miPromesa );
}
// funcionConPromesaYAwait();
async function funcionfinal(){
    console.log('inicio');
    let promise = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await'), 3000);
    });
    // el await detiene la ejecucion.
    console.log(await promesa);
    // esto se ejecuta despues del await.
    console.log('fin');
}
funcionfinal();









