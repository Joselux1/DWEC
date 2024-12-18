/* ejercicio1 */
let arrayNumeros=[1,2,3,4,5,6,7,8,9,10];


let nuevoArray  = arrayNumeros.map(num => num ** 2); //teoria


let NumPares =  arrayNumeros.filter(num => num % 2 === 0); //teoria


let sumaArray = arrayNumeros.reduce((acum, num) => acum + num, 0)//teoria



console.log(nuevoArray);
console.log(NumPares);
console.log(sumaArray);

