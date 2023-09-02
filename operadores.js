let a = 3, b = 2;

let z = a + b;
console.log(z);

// Pre-incremento = usar el operador antes de la let.
// Antes de asignar el valor de A, se incrementa.
z = ++a;
console.log(a);
console.log(z);

// Post-incrementp = usar el operador despues de la let.
// Despues de asignar el valor se incrementa.
// Z = Guardo el primer valor pero no el incremento.
z = b++;
console.log(b);
console.log(z);

// a = 4
z = a;

// Pre-Decremento
// z = Guarda el valor incluido el decremento por el pre.
z = --a;
console.log(a);
console.log(z);

// Post-Decremento
// z = no guarda el decremento si no el valor base de a.
z = a--;
console.log(a);
console.log(z);




