// ==========================================
// BLOQUE A - VARIABLES
// ==========================================

let ciudad = "Madrid";
const pais = "España";

console.log("Vivo en " + ciudad + ", " + pais);

let precio = 100;
const iva = 0.21;

let precioFinal = precio + (precio * iva);
console.log("Precio final: " + precioFinal);

let edadDias = 20;
console.log("Has vivido " + (edadDias * 365) + " días");


// ==========================================
// BLOQUE B - PROMPT
// ==========================================

let nombreUsuario = prompt("¿Cómo te llamas?");
alert("Bienvenido " + nombreUsuario);


// ==========================================
// BLOQUE C - LÓGICA
// ==========================================

let miEdad = 17;

if (miEdad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}


// ==========================================
// CAMBIAR TEXTO
// ==========================================

document.getElementById("botonTexto").addEventListener("click", function() {
    document.getElementById("titulo").textContent = "Texto cambiado";
});


// ==========================================
// LOGIN
// ==========================================

document.getElementById("login").addEventListener("click", function() {
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario === "admin" && clave === "1234") {
        document.getElementById("resultadoLogin").textContent =
            "Bienvenido " + usuario;
    } else {
        document.getElementById("resultadoLogin").textContent =
            "Acceso denegado";
    }
});


// ==========================================
// BOTONES DE COLORES
// ==========================================

let colores = ["red", "green", "blue", "yellow"];

let contenedor = document.getElementById("botonesColores");

for (let color of colores) {
    let boton = document.createElement("button");

    boton.textContent = color;

    boton.addEventListener("click", function() {
        document.getElementById("titulo").style.color = color;
    });

    contenedor.appendChild(boton);
}


// ==========================================
// PRESENTACIÓN
// ==========================================

document.getElementById("mostrar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    document.getElementById("resultado").textContent =
        "Mi nombre es " + nombre + " y tengo " + edad + " años";
});


// ==========================================
// LISTA DINÁMICA
// ==========================================

document.getElementById("añadir").addEventListener("click", function() {

    let texto = document.getElementById("texto").value;

    let li = document.createElement("li");
    li.textContent = texto;

    let borrar = document.createElement("button");
    borrar.textContent = " X ";

    borrar.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(borrar);

    document.getElementById("lista").appendChild(li);
});


// ==========================================
// FUNCIONES
// ==========================================

function saludar(nombre) {
    return "Hola " + nombre;
}

console.log(saludar("Carlos"));


// ==========================================
// ARRAY
// ==========================================

let numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros.shift();

console.log(numeros);


// ==========================================
// OBJETOS
// ==========================================

const persona = {
    nombre: "Juan",
    edad: 30
};

persona.ocupacion = "Programador";

console.log(persona);


// ==========================================
// ADIVINAR NÚMERO
// ==========================================

let secreto = Math.floor(Math.random() * 10) + 1;
let intento = Number(prompt("Adivina un número del 1 al 10"));

if (intento === secreto) {
    alert("Correcto");
} else {
    alert("Incorrecto. Era " + secreto);
}