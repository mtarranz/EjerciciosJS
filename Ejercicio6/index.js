const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let sumaFor=0;
let sumaForof=0;

//Sumar notas con bucle for
for (let i =0; i<notas.length; i++){
    sumaFor+=notas[i];
}

//Sumar notas con bucle for .. of
for(const nota of notas){
    sumaForof+=nota;
}

console.log("Suma1= ", sumaFor);
console.log("Suma2= ", sumaForof);