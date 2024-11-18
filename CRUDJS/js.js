let creaboton = document.getElementById("crearboton");
let cuerpoTabla = document.getElementById("cuerpoTabla");
let table = document.getElementById("table");
let añadirModal = document.getElementById("añadirModal");
let id = document.getElementById("id");

const guardarDatos = document.getElementById("guardarDatos");











guardarDatos.addEventListener("click", function() { //boton de guardar tendria que efectuar esta condicion .
  

  let descripcionTarea = document.getElementById("descripcionTarea").value;

if(descripcionTarea){

   arrayTabla.push(descripcionTarea); //el metodo push alamacena en ela array los elementos que le pasamos.
   crearTabla();
  
  
   
  }else{

    alert("Ingresa una tarea valida");
  }





});

let arrayTabla = [];


function crearTabla(){

  cuerpoTabla.innerHTML = '';



      for(let i = 0; i < arrayTabla.length ;i++){
       
        console.log(arrayTabla[i])
          cuerpoTabla.innerHTML  +=
                  `<tr>
                      <th scope="row" >${i}</th>
                      <td>${arrayTabla[i] }</td>
                        <td>
                      <button type="btnEditar" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar" data-bs-whatever="@mdo">Editar</button>
                      <button type="btnEliminar" id="eliminar_${i}" onclick="eliminar(${i})" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#eliminar" data-bs-whatever="@mdo">Eliminar</button>
                      </td>
                  
                  </tr>`;
                 
          
              
             



      }
    }



function eliminar(i) {
   
alertify.confirm("¿Seguro que quieres eliminar?",
    function(){
       alertify.success('Eliminado');
      arrayTabla.splice(i,1); // le pasamos la posicion i  y la cantidad que queremos borrar que es 1 , si ponemos 2 borraria 2
      crearTabla();// llamamos ala funcion para actualizar la tabla con exito.
      console.log(arrayTabla);
 
   
    },
    function(){
      alertify.error('Cancel');
    });
    }
   


  function crearTarea(){













  }

document.addEventListener("DOMContentLoaded", (event) => {

 



 
  crearTabla(); // le pasamos aqui la funcion crearTabla para que carge el html y ejecute el codigo , la funcion crearTabla funciona en (GLOBAL)preguntar a Salvador.

    console.log("DOM fully loaded and parsed");
  });




