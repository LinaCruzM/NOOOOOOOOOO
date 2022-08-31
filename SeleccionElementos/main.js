'use strict';
//Seleccionar por Id
const parrafo1 = document.getElementById('parrafo1');
//console.log(parrafo1);

//Selección por atributo name (En deshuso)
let nameParrafo = document.getElementsByName("parrafo2");
//console.log(nameParrafo);

//Selección por class
let elemento = document.getElementsByClassName("parrafo");
//console.log(elemento);

// Query Selector por Id (#)
const parrafouno = document.querySelector("#parrafo1");
//console.log(parrafouno);

const elementEtiqueta = document.querySelector("h1");
//console.log(elementEtiqueta);

const elementClass = document.querySelector(".ejemplo");
//console.log(elementClass);

//Seleccionando todos los elementos p
const todosP = document.querySelectorAll("p");
//console.log(todosP);

//Clásica
/**function print(){
    const valor = document.getElementById("edad").value;
    alert("La edad es: " +valor);
}
*/

//Flecha
const print = () => {
    const valor = document.getElementById("edad").value;
    alert("La edad es: " +valor);
}