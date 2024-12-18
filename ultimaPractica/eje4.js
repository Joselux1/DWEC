

let arrayLista = ["feliz","Navidad","Pirata","CopiandocomodiceSalvador"];




let MasDeCinco = arrayLista.filter(cincoLetras => cincoLetras.length >5);//lo mismo de antes recorremos elementos y buscamos mas de 5



let invertir = arrayLista.map(invertir => invertir.split("").reverse().join("")); //aqui con map lo que hacemos es aplicar la funcion a cada elemento del array y nos devuelve un array nuevo con los metodos aplicados.


let ordenacion = arrayLista.sort(longitud => longitud.length); // lo mismo de antes recorremos los elementos y comprobamos la longitud para que nos lo ordene de menor a mayor .


console.log(MasDeCinco)
console.log(invertir)
console.log(ordenacion)