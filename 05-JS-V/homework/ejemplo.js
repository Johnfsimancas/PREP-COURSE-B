/* function Autos(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  this.presentacion = function () {
    return (
      "Hola, soy un carro, de la marca " +
      this.nombre +
      " y soy de un bonito color " +
      this.color
    );
  };
} */
class Autos {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
    this.presentacion = function () {
      return (
        "Hola, soy un carro, de la marca " +
        this.nombre +
        " y soy de un bonito color " +
        this.color
      );
    };
    this.despedida = function () {
      return (
        "Hola, soy un carro, de la marca " +
        this.nombre +
        " y soy de un bonito color " +
        this.color
      );
    };
  }
}

var audiCar = new Autos("Audi", "rojo");
console.log(audiCar.presentacion())
console.log(audiCar.color)
console.log(audiCar);
var mercedesCar = new Autos("Mercedes Benz");
console.log(mercedesCar);

/* function Gato(nombre) {
  // El nuevo operador crea un objeto, "this"
  this.nombre = nombre;
  this.maullar = function () {
    return "Mi nombre es " + this.nombre + " ... Meow!";
  };
  // Devuelve el objeto "this"
}

var sam = new Gato("Sam");
var kitty = new Gato("Kitty");
console.log(sam.maullar()); // 'Mi nombre es Sam ... Meow!'
console.log(kitty.maullar()); // 'Mi nombre es Kitty ... Meow!'
 */
