// Vamos a construir la interactividad paso a paso durante la clase.
console.log("bienvenido a la primera actividad");

console.log("Ahora vamos a comenzar con la primera actividad");
//Son variables
const botonsaludo = document.querySelector("#boton-saludo");
//quiero cambiar el texto de un elemento html
// 1ero tengo que buscarlo
//2do tengo que guardar el resultado de la busqueda
const mensajeSaludo = document.querySelector
("#mensaje");

const botonTema = document.querySelector ("#boton-tema") 

const botonLike = document.querySelector("#boton-like")

console.log("mensajeSaludo");
const miNombre = "Delfina";
const miEdad = 19;

console.log("resultado de la busqueda")
console.log(botonsaludo);

botonsaludo.addEventListener("click", function(){
    console.log("apretaste el boton");
    //para que aparezca el saludo cuando apreto el boton lo copie, borre y pegue en esto
    //para que aparezca mi nombre con el hola le pongo +
    //concatenar es cuando pongo dos palabras una al lado de la otra, significa encadenar caracteres
    mensajeSaludo.innerHTML = "Hola " + miNombre + miEdad;
})
//agrego funcionalidad al boton tema
botonTema.addEventListener("click", function() {
    console.log("Apretaste el boton tema")
    //poner y sacar clase de "tema oscuro"
    //hecer un toggle de esa clase css sobre un elemento html
    document.body.classList.toggle("tema-oscuro")
})

//2 formas de crear una variable son const y let
//si es algo qie no s va a modificar es const
//si creo la variable con un let la puedo modificar
let numeroDeLikes = 0


//agrego funcionalidad al boton like
botonLike.addEventListener ("click", function () {
console.log("Apretaste el boton like")
botonLike.innerHTML = "Me gusta ("+ numeroDeLikes + ")"
numeroDeLikes = numeroDeLikes + 1
})
