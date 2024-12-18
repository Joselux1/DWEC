

let arrayNum = [];


for(let i  = 0 ; i < 5 ; i++){ //hacemos el bucle para generar numeros 


    let numAleatorio =  Math.floor(Math.random() * 100) ; // este metodo hacemos que genere numeros aleatorios

    arrayNum.push(numAleatorio); //aqui metemos en el array los numeros aleatorios


}

let numMax = Math.max(...arrayNum);//teoria

let numMin = Math.min(...arrayNum);//lo mismo

let numImpar = arrayNum.filter(numero => numero % 2 !== 0); //lo mismo que con par pero ahora con impar



console.log(arrayNum);
console.log(numMax);
console.log(numImpar);
