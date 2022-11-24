function Usuario(nombre, email) {
  this.nombre = nombre;
  this.email = email;
}

Usuario.prototype.presentacion = function () {
  return "Mi nombre es " + this.nombre + ", mi email es " + this.email + ".";
};

var juan = new Usuario("Juan", "juanperez@mail.com");
console.log(juan.presentacion())

var sander = new Usuario("sander", "sander@gmail.com")
console.log(sander.presentacion());















let antonio = new Usuario("Antonio", "anton@mail.com");

console.log(juan.presentacion()); // Mi nombre es Juan, mi email es juanperez@mail.com.
console.log(antonio.presentacion());
