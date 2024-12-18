const arrayEstudiantes = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 22, nota: 5 },
    { nombre: "María", edad: 19, nota: 7 },
    { nombre: "Carlos", edad: 21, nota: 4 }
];


let comprobarAprobados = arrayEstudiantes.filter(aprobado => aprobado.nota >= 5) //recorremos los elementos y buscamos las notas mayores o igual a 5


let ordenacionEdades =  arrayEstudiantes.sort((a, b) => a.edad - b.edad); //recorremos los elementos y seleccionamos las edades en ascendente si fuera descendente seria de b - a


let soloNombres = arrayEstudiantes.map(solonombres => solonombres.nombre);//recorremos los elementos y seleccionamos solo los nombres


let calcularPromedioNotas = arrayEstudiantes.reduce((acum, estudiante) => acum + estudiante.nota, 0)//teoria he usado como valor estudiante.nota y el acumulador para que haga la suma.



console.log(comprobarAprobados);
console.log(ordenacionEdades);
console.log(soloNombres)
console.log(calcularPromedioNotas)