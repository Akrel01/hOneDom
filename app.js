
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





// let nombres = Object.keys(array).map(key =>{
//     const value = array[key]
// } )

  
//  persona = array[0].nombre + " " + array[0].apellido;

// const lista = document.getElementById("lista"); //Referencia donde colocare el elemento creado

// const listadoPersonas = document.createElement("li"); // Crear el elemento

// lista.append(listadoPersonas); //Colocar el elemento creado.

// listadoPersonas.innerText = Object.values(array[0]); //Escribo la persona en el dom.

// // let hola = Object.values(array[0]); obtener los valores del objeto en el indice del array.
// // console.log(hola)


    
   
//      console.log(personas);


