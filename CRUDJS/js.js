let creaboton = document.getElementById("crearboton");
let cuerpoTabla = document.getElementById("cuerpoTabla");
let table = document.getElementById("table");
let añadirModal = document.getElementById("añadirModal");
const guardarDatos = document.getElementById("guardarDatos");

class Tarea { // Manejo de las propiedades id y descripcion
  constructor(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
  }

  // Getter para la descripción
  getDescripcion() {
    return this.descripcion;
  }

  // Setter para la descripción
  setDescripcion(nuevaDescripcion) {
    this.descripcion = nuevaDescripcion;
  }
}

let arrayTabla = [];

guardarDatos.addEventListener("click", function () {
  //boton de guardar tendria que efectuar esta condicion .

  let descripcionTarea = document.getElementById("descripcionTarea").value;

  if (descripcionTarea) {
    arrayTabla.push(descripcionTarea); //el metodo push alamacena en ela array los elementos que le pasamos.
    crearTabla();

    alert("Tarea Registrada con exito");
  
  } else {
    alert("Ingresa una tarea valida");
  }
});

function editarDatos(id) {
 
  let btnEditar = document.getElementById("btnEditarDatos");
 
  //cloneNode metodo para clonar el boton y crea un nuevo elemento html,si usamos true el metodo copia el nodo y sus hijos del boton .
  let nuevoBtnEditar = btnEditar.cloneNode(true); 
  // paretNode permite modificar el boton del  DOM (parentNode  es el padre de un elemento)
  btnEditar.parentNode.replaceChild(nuevoBtnEditar, btnEditar);

  // Actualizar referencia al botón clonado
  btnEditar = nuevoBtnEditar;

  // Añadir el listener al botón
  btnEditar.addEventListener("click", function () {

    // Obtener el nuevo valor del campo de texto
   let editarDescripcion = document.getElementById("editarDescripcion").value;

    // Validar y actualizar el array
    if (editarDescripcion) {
      arrayTabla[id] = editarDescripcion;
      crearTabla(); //  actualiza la tabla
      alert("Descripcion de Tarea Actualizada");
 
    }
  });
}




function crearTabla() {
  cuerpoTabla.innerHTML = "";

  for (let i = 0; i < arrayTabla.length; i++) {

    cuerpoTabla.innerHTML += `<tr>
                      <th scope="row" >${i}</th>
                      <td>${arrayTabla[i]}</td>
                        <td>
                      <button type="btnEditar" id="editarDatos${i}" onclick="editarDatos(${i})"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar" data-bs-whatever="@mdo">Editar</button>
                      <button type="btnEliminar" id="eliminar_${i}" onclick="eliminar(${i})" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#eliminar" data-bs-whatever="@mdo">Eliminar</button>
                      </td>
                  </tr>`;
  }
}
// mirar id para el editar
function eliminar(id) {
  alertify.confirm(
    "¿Seguro que quieres eliminar?",
    function () {
      alertify.success("Eliminado");
      arrayTabla.splice(id, 1); // le pasamos la posicion i  y la cantidad que queremos borrar que es 1 , si ponemos 2 borraria 2
      crearTabla(); // llamamos ala funcion para actualizar la tabla con exito.
      console.log(arrayTabla);
    },
    function () {
      alertify.error("Cancel");
    }
  );
}

function crearTarea() {}

document.addEventListener("DOMContentLoaded", (event) => {

  crearTabla(); // le pasamos aqui la funcion crearTabla para que carge el html y ejecute el codigo , la funcion crearTabla funciona en (GLOBAL)preguntar a Salvador.
  console.log("DOM fully loaded and parsed");
});
