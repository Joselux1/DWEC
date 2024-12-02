class Viaje {
  constructor(codigo, destino, precio, disponibilidad = true) {
    this.codigo = codigo;
    this.destino = destino;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
  }

  getInfo() {
    return `Viaje [${this.codigo}] a ${this.destino}, precio: ${this.precio} euros`;
  }
}

class Vuelo extends Viaje {
  constructor(codigo, destino, precio, aerolinea, duracion) {
    super(codigo, destino, precio);
    this.aerolinea = aerolinea;
    this.duracion = duracion;
  }

  getInfo() {
    return `${super.getInfo()}, Aerolínea: ${this.aerolinea}, Duración: ${
      this.duracion
    } horas`;
  }
}

class Hotel extends Viaje {
  constructor(codigo, destino, precio, estrellas, tipoHabitacion) {
    super(codigo, destino, precio);
    this.estrellas = estrellas;
    this.tipoHabitacion = tipoHabitacion;
  }

  getInfo() {
    return `${super.getInfo()}, Hotel ${
      this.estrellas
    } estrellas, Habitación: ${this.tipoHabitacion}`;
  }
}

class Paquete extends Viaje {
  constructor(codigo, destino, precio, vuelo, hotel) {
    super(codigo, destino, precio);
    this.vuelo = vuelo;
    this.hotel = hotel;
  }

  getInfo() {
    return `${super.getInfo()}\n - Vuelo: ${this.vuelo.getInfo()}\n - Hotel: ${this.hotel.getInfo()}`;
  }
}

class Cliente {
  constructor(nombre, apellidos, email, telefono) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.telefono = telefono;
  }

  getResumen() {
    return `Cliente: ${this.nombre} ${this.apellidos}, Email: ${this.email}, Teléfono: ${this.telefono}`;
  }
}

class Reserva {
  constructor(cliente, viaje) {
    this.cliente = cliente;
    this.viaje = viaje;
  }

  getResumen() {
    return `${this.cliente.getResumen()}\nReservó: ${this.viaje.getInfo()}`;
  }
}

// <-------------- Tabla Cliente -------------------------->
  
let arrayCliente = [];

function tablaCliente() {
  let cuerpo = document.getElementById("cuerpoCliente");

  cuerpo.innerHTML = "";

  for (let i = 0; i < arrayCliente.length; i++) {
    console.table(i);

    cuerpo.innerHTML += `
                <tr>
                    <td>${arrayCliente[i].nombre}</td>
                    <td>${arrayCliente[i].apellidos} </td>
                    <td>${arrayCliente[i].telefono} </td>
                    <td>${arrayCliente[i].email} </td>
                    <td><button class="btn btn-light btn-sm">Eliminar</button></td>
                </tr>`;
  }
  actualizarSelectClientes();


}

// <-------------- Tabla Viaje -------------------------->

let arrayViaje = [];

function tablaViajes (){


let cuerpoViaje = document.getElementById("cuerpoViaje");

cuerpoViaje.innerHTML = "";

 for (let i = 0; i < arrayViaje.length; i++) {
    console.table(i);

    cuerpoViaje.innerHTML += `
                <tr>
                    <td>${arrayViaje[i].codigo}</td>
                    <td>${arrayViaje[i].destino} </td>
                    <td>${arrayViaje[i].precio} </td>
                     <td>${arrayViaje[i].disponibilidad} </td>
                    <td><button class="btn btn-light btn-sm">Eliminar</button></td>
                </tr>`;
  }
  actualizarSelectViajes();
}

// <-------------- Tabla Reserva -------------------------->
  let arrayReserva = [];

  function tablaReserva (){


    let cuerpoReserva = document.getElementById("cuerpoReserva");
    
    cuerpoReserva.innerHTML = "";
    
     for (let i = 0; i < arrayReserva.length; i++) {
        console.table(i);
    
        cuerpoReserva.innerHTML += `
                    <tr>
                        <td>${arrayReserva[i].cliente.nombre}</td>
                        <td>${arrayReserva[i].viaje.destino} </td>
                        <td>${arrayReserva[i].fecha}</td>
                        <td><button class="btn btn-light btn-sm">Eliminar</button></td>
                    </tr>`;
      }
    }
    function actualizarSelectClientes() { 
      let selectorCliente = document.getElementById("selectorCliente"); 
      selectorCliente.innerHTML = ""; 
      for (let i = 0; i < arrayCliente.length; i++) {
       selectorCliente.innerHTML += `<option value="${i}">${arrayCliente[i].nombre} ${arrayCliente[i].apellidos}</option>`; 
      } 
    }
  
    function actualizarSelectViajes() {
       let selectorViaje1 = document.getElementById("selectorViaje1"); 
          selectorViaje1.innerHTML = "";
           for (let i = 0; i < arrayViaje.length; i++){ 
            selectorViaje1.innerHTML += `<option value="${i}">${arrayViaje[i].destino}</option>`;
         }
     }

// <-------------- DOM -------------------------->

  document.addEventListener("DOMContentLoaded", (event) => {
    let btnCliente = document.getElementById("btnCliente");
  
    btnCliente.addEventListener("click", function () {
        let apellidos = document.getElementById("apellidos").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        let nombre = document.getElementById("nombre").value;
    
        let nuevoCliente = new Cliente(nombre, apellidos, email, telefono);
    
        if (nuevoCliente) {
          arrayCliente.push(nuevoCliente);
          arrayCliente.forEach(e => console.log(e))
    
          tablaCliente();
          alert("Datos registrados con exito");
        } else {
          alert("Datos No registrados.");
        }
     });

    // <-------------- Reserva Viajes -------------------------->
  
    let btnViajes = document.getElementById("btnViajes");

    btnViajes.addEventListener("click", function () {
        let codigo = document.getElementById("codigo").value;
        let destino = document.getElementById("destino").value;
        let precio = document.getElementById("precio").value;
        let selectorViajes =  document.getElementById("selectorViaje").value;
        let nuevoViaje = new Viaje (codigo, destino, precio,selectorViajes);

          if (nuevoViaje) {
            arrayViaje.push(nuevoViaje);
            arrayViaje.forEach(e => console.log(e))
      
            tablaViajes();
            alert("Datos registrados con exito");
          } else {
            alert("Datos No registrados.");
          }
    });
  

     // <-------------- Reserva Total -------------------------->

     let btnCrear = document.getElementById("btnCrear"); 

     btnCrear.addEventListener("click", function () { 

      let selectorCliente = document.getElementById("selectorCliente").value;
      let selectorViaje1 = document.getElementById("selectorViaje1").value; 
      let fechaReserva = document.getElementById("fechaReserva").value;
        let cliente = arrayCliente[selectorCliente]; 
        let viaje = arrayViaje[selectorViaje1];
        let nuevaReserva = new Reserva(cliente, viaje,fechaReserva ); 
        
        arrayReserva.push(nuevaReserva); 
        tablaReserva();
     });



    console.log("DOM fully loaded and parsed");
  });
