// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  // ------------------------------------------------
  //con un for de toda la vida
  // ------------------------------------------------
  /* 
  let suma = 0;
  for (let i = 1; i <= 10; i++) {
    suma = suma + i
  }
  return suma  */
 
  // ------------------------------------------------
  // con un while
  // ------------------------------------------------
  /* 
  let suma = 0;
  let i = 0;
  while (i < 11) {
    suma += i; // suma = suma + i
    i++;
  }
  return suma; 
  */
  // ------------------------------------------------
  //con un for of
  // ------------------------------------------------
  /* var suma = 0
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for(const e of numeros) suma += e
  return suma  */
 
  // ------------------------------------------------
  //con un for each
  // ------------------------------------------------
  /* var suma = 0;
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numeros.forEach((e) => (suma += e));
  return suma;  */
 
  // ------------------------------------------------
  //con un map
  // ------------------------------------------------
  /* 
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return numeros.map(e=>suma+=e).pop() 
  */
  // ------------------------------------------------
  //con un filter, es posible?
  // ------------------------------------------------
  //con un reduce
  // ------------------------------------------------
  /* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return numeros.reduce((prev, current) => prev + current, 0); */
}
//console.log(imprimirSumaNumeros());

function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  /* return array.filter((e) => e % 2 === 0); */
}
//console.log(encuentraPares([1,2,3,4,5,6,7,8]))

function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  /* return array.map((num) => num ** 2); */
}
/* console.log(elevaAlCuadrado([1, 2, 3, 4, 5, 6, 7, 8])); */
function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  /* return array.reduce((prev, next) => prev + next, array[0]); */
}
/* console.log(sumaArray([1, 2, 3, 4, 5, 6, 7, 8])); */
function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  /* console.log(typeof num);
  console.log(num);
  num += "";
  console.log(typeof num);
  console.log(num);
  return num.length */
}
/* console.log(numeroDigitos(25454)); */
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos,
};
