/*ejercicio2 */

let arrayCiudades = ["Puerto","Jerez","Madrid","Sanlucar","Cadiz"]


let cambioMayusculas = arrayCiudades.map(arrayCiudades => arrayCiudades.toUpperCase());


let ordenacionDelArray =  arrayCiudades.sort();//metodo explicado en la teoria.


let buscadorLetra = arrayCiudades.some(letra => letra.includes ("M")); //usamos include para buscar un elemento especifico en el array como puede ser la M mayuscula.


let comprobadorCaracteres = arrayCiudades.every(caracteres => caracteres.length > 2 ) //aqui donde comprobamos si se cumple esa condicion es en el length que es la longitud del la palabra  si es menor a 2 nos daria false podemos comprobarlo a poner 2 letras en una ciudad y nos daria false.




console.log(cambioMayusculas)
console.log(ordenacionDelArray)
console.log(buscadorLetra)
console.log(comprobadorCaracteres)