let arrayUsuarios = JSON.parse(localStorage.getItem("usuario")) || [];// Recupera la lista de usuarios almacenados en localStorage o inicializa un array vacío

function validacion() {
    const email = document.getElementById("email").value.trim();//cogemos el valor y .trim para los espacios en blanco
    const password = document.getElementById("password").value;
    const repetirPassword = document.getElementById("repetirPassword").value;
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    //Expresión regular para validar que el email tenga un formato correcto (ejemplo@dominio.com)


   if(!expresionRegular.test(email)) { //Verifica si el email tiene un formato válido
        alert("Ingrese un email válido.");

        return false;
    }
    if(password.length < 5 || password.length > 10) {//Verificaion de contraseña entre 5 y 10 caracteres
        alert("La contraseña debe tener entre 5 y 10 caracteres.");

        return false;
    }
    if(repetirPassword && repetirPassword !== password) {
        alert("Las contraseñas no coinciden.");

        return false;
    }
    return true;
}

function mostrarOcultar() {
    const repetirPasswordDiv = document.getElementById("repetirPasswordDiv");
    const btnIniciarSesion = document.getElementById("btnIniciarSesion");
    const btnRegistrar = document.getElementById("btnRegistrar");
    const titulo = document.getElementById("titulo");
    const mostrar = document.getElementById("mostrar");

    repetirPasswordDiv.classList.toggle("hidden");//Alterna la clase "hidden" para mostrar u ocultar la sección de repetir contraseña
    btnRegistrar.classList.toggle("hidden");
    btnIniciarSesion.classList.toggle("hidden");

    if (repetirPasswordDiv.classList.contains("hidden")) {

        titulo.textContent = "Inicio Sesión"; //Cambia el texto según si se está en la vista de inicio de sesión o registro

        mostrar.textContent = "¿Necesitas Registrarte?";

    }else{

        titulo.textContent = "Registro";
        mostrar.textContent = "¿Necesitas Iniciar Sesión?";

    }
}

function guardarUsuario() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;


    let arrayUsuarios = JSON.parse(localStorage.getItem("usuario")) || [];//Recuperar usuarios correctamente

   
    if(arrayUsuarios.some(usuario => usuario.email === email)){  //Verificar si el email ya está registrado
      
        alert("El email ya está registrado.");

        return false; //Detiene la ejecución y no guarda el usuario
    }


    let nuevoUsuario = { email: email, password: password }; // Crea un nuevo objeto usuario con email y contraseña
    arrayUsuarios.push(nuevoUsuario);//metemos nuevos usuarios en el array y lo guarda en localstorage
    localStorage.setItem('usuario', JSON.stringify(arrayUsuarios));

    alert("Registro Exitoso");//Muestra un mensaje de éxito y redirige a la página de inicio
    window.location.href = "index.html";
}



function iniciarSesion() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let usuarios = JSON.parse(localStorage.getItem("usuario")) || []; // Recupera la lista de usuarios desde localStorage

    let usuarioValido = usuarios.some(usuario => usuario.email === email && usuario.password === password); // Verifica si existe un usuario con el email y contraseña ingresados

    if (usuarioValido) {
        alert("Inicio de sesión exitoso");
        window.location.href = "admin.html";
    } else {
        alert("Email o contraseña incorrectos.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const mostrar = document.getElementById("mostrar");
    const btnRegistrar = document.getElementById("btnRegistrar");
    const btnIniciarSesion = document.getElementById("btnIniciarSesion");
    const repetirPasswordDiv = document.getElementById("repetirPasswordDiv");
    const formulario = document.getElementById("formulario");


 
    mostrar.addEventListener("click", mostrarOcultar); //Alternar entre registro e inicio de sesión

    btnRegistrar.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que la página se recargue
        if (validacion()) {  // Solo si la validación es correcta
            guardarUsuario();
        }
    });

   
    btnIniciarSesion.addEventListener("click", (event) => {//inicio sesion
        event.preventDefault();
        iniciarSesion();
    });
    
    formulario.addEventListener("keydown", (event) => { //Cancela registro con enter en inicio sesion 
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que la página se recargue
            
            if(repetirPasswordDiv.classList.contains("hidden")){
                iniciarSesion();
            }else{
                if(validacion()) {
                    guardarUsuario();
                }
            }
        }
    });
});
$(document).ready(function() {
    $('#userTable').DataTable({
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla",
            paginate: {
                first: "Primero",
                previous: "Anterior",
                next: "Siguiente",
                last: "Último"
            },
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        },
        pageLength: 3,  
        
    });
});

function verUsuarios() {// Mostrar usuarios registrados
    let usuario = JSON.parse(localStorage.getItem('usuario')) || [];
    let listaUsuario = document.getElementById('usuario');
    listaUsuario.innerHTML = '';
    usuario.forEach(user => {
        listaUsuario.innerHTML += `<tr><td>${user.email}</td><td>${user.password}</td></tr>`;
    });
}
// Cerrar sesión
document.getElementById('btnCerrar').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Mostrar usuarios en admin
if (window.location.pathname.includes('admin.html')) {
    verUsuarios();
}