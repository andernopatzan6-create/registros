
let cantidad = Number(prompt("Ingrese la cantidad de estudiantes:"));

let aprobados = 0;
let reprobados = 0;
let suma = 0;
let mayor = 0;
let menor = 100;

for(let i = 1; i <= cantidad; i++){

    let calificacion = Number(prompt("Ingrese la calificación del estudiante " + i + ":"));

    while(calificacion < 0){
        calificacion = Number(prompt("Ingrese una calificación válida:"));
    }

    while(calificacion > 100){
        calificacion = Number(prompt("Ingrese una calificación válida:"));
    }

    if(calificacion >= 60){
        aprobados = aprobados + 1;
    }
    else{
        reprobados = reprobados + 1;
    }

    suma = suma + calificacion;

    if(calificacion > mayor){
        mayor = calificacion;
    }

    if(calificacion < menor){
        menor = calificacion;
    }
}

let promedio = suma / cantidad;

document.write("Cantidad total de estudiantes: " + cantidad + "<br>");
document.write("Cantidad de estudiantes aprobados: " + aprobados + "<br>");
document.write("Cantidad de estudiantes reprobados: " + reprobados + "<br>");
document.write("Promedio general: " + promedio + "<br>");
document.write("Calificación más alta: " + mayor + "<br>");
document.write("Calificación más baja: " + menor + "<br>");