let arrayprimero = [1,2,3]
let arraysegundo = [4,5,6]


let suma =  arrayprimero.map((primero, segundo ) => primero + arraysegundo[segundo])//le pasamos el valor (primero) al primer array y el (segundo) al segundo array donde despues hacemos la suma 

let multiplicar = arrayprimero.map((primero,segundo) => primero * arraysegundo[segundo])// lo mismo que antes mutliplicando

let mayorNum =  arraysegundo.findIndex(num => num > 5)// he puesto el 5 en vez de 10, por no cambiar el array me dara 2 

console.log(suma)
console.log(multiplicar)
console.log(mayorNum)