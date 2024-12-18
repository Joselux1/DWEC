let arrayPalabra = ["La","vida","es","bella","y","divertida"];


let Unida = arrayPalabra.reduce((acum, palabra) => acum +" "+ palabra);//mismo que antes pero ahora concatenando con el espacio para la frase


let Inversa = arrayPalabra.slice().reverse().join(" ");//mismo que antes


let Contiene = arrayPalabra.includes("bella");//mismo que antes

console.log(Unida);
console.log(Inversa);
console.log(Contiene);
