let numeroRandom;
let intentos;
let maxIntentos;

let configuracionDificultad = {
    facil: { rango: 10, intentos: 5 },
    medio: { rango: 50, intentos: 7 },
    dificil: { rango: 100, intentos: 10 }
};

document.addEventListener('DOMContentLoaded', () => {
    let seleccionDificultad = document.getElementById('dificultad');
    let botonEntrada = document.getElementById('entradaNum');
    let botonAdivinar = document.getElementById('botonAdivinar');
    let mensaje = document.getElementById('mensaje');


    function iniciarJuego() {
        let dificultad = seleccionDificultad.value;
        let configuracion = configuracionDificultad[dificultad];
        numeroRandom = Math.floor(Math.random() * configuracion.rango) + 1;
        maxIntentos = configuracion.intentos;
        intentos = 0;
        mensaje.innerHTML = `Adivina un número entre 1 y ${configuracion.rango}. Tienes ${maxIntentos} intentos.`;
        botonEntrada.value = '';
    }

 
    function comprobacionNum() {
        let SuposicionNum = parseInt(botonEntrada.value, 10);
        intentos++;

        if (isNaN(SuposicionNum) || SuposicionNum < 1 || SuposicionNum > configuracionDificultad[seleccionDificultad.value].rango) {
            mensaje.innerHTML = `Por favor ingresa un número válido dentro del rango.`;
            return;
        }

        if (SuposicionNum === numeroRandom) {
            mensaje.innerHTML = `Adivinaste el número  secreto en ${intentos} intentos`;
            botonAdivinar.disabled = true; 
        } else if (intentos >= maxIntentos) {
            mensaje.innerHTML = ` Has agotado tus intentos. El número secreto era  ${numeroRandom}`;
            botonAdivinar.disabled = true;
        } else {
            mensaje.innerHTML = SuposicionNum < numeroRandom  ? `Demasiado bajo. Intento ${intentos} de ${maxIntentos}.`  
            :`Demasiado alto. Intento ${intentos} de ${maxIntentos}.`;
        }
    }

 
    seleccionDificultad.addEventListener('change', iniciarJuego);

    botonAdivinar.addEventListener('click', comprobacionNum);

  
    iniciarJuego();
});
