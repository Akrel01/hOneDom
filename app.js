
const array = [
    {
        nombre:"Juan",
        apellido:"Perez",
    },
    {
        nombre:"Ester",
        apellido:"Alba",
    },
    {
        nombre:"Jose",
        apellido:"Nuñes",
    },
    {
        nombre:"Gabriel",
        apellido:"Martinez",
    },
    {
        nombre:"Joselu",
        apellido:"Roque",
    },
];

//Crear elemento.

const listaElemento = document.getElementById("lista")
let creadorElemento

function creadorEtiquetas() {
    creadorElemento = document.createElement("li");
    lista.append(creadorElemento)
}

let datosPersona;

for (let index = 0; index < array.length; index++) {
     datosPersona = Object.values(array[index]);

    nombresPersona = datosPersona.toString();
     let correcion = nombresPersona.replace(",", " ")
    
    do {
        creadorEtiquetas();
        creadorElemento.innerText = correcion
    } while (datosPersona == true);
}




