// Vamos a construir la interactividad paso a paso durante la clase.
console.log("bienvenido a la primera actividad");

console.log("Ahora vamos a comenzar con la primera actividad");

const botonsaludo = document.querySelector("#boton-saludo");
//quiero cambiar el texto de un elemento html
// 1ero tengo que buscarlo
//2do tengo que guardar el resultado de la busqueda
const mensajeSaludo = document.querySelector("#mensaje");
console.log("mensajeSaludo");
const miNombre = "Delfina";
const miEdad = 19;

console.log("resultado de la busqueda")
console.log(botonsaludo);

botonsaludo.addEventListener("click", function(){
    console.log("apretaste el boton");
    //para que aparezca el saludo cuando apreto el boton lo copie, borre y pegue en esto
    //para que aparezca mi nombre con el hola le pongo +
    mensajeSaludo.innerHTML = "Hola " + miNombre + miEdad;
})


