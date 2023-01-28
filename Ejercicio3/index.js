const data = ['hola', 2, 5, 'adios'];

//Determina cuál de los dos números que hay en el array es mayor. 
const esMayor=data[1]>data[2];
if(esMayor===true){
    console.log('El número ', data[1], 'es mayor que el número ', data[2]);
}
else{
    console.log('El número ', data[2], 'es mayor que el número ', data[1]);
}


//Determina el resultado de las cinco operaciones numéricas realizadas con los dos elementos numéricos. 
const op1=data[2]+data[1];
const op2=data[2]-data[1];
const op3=data[2]*data[1];
const op4=data[2]/data[1];
const op5=data[2]%data[1];

console.log('Resultado Suma: ', op1);
console.log('Resultado Resta: ', op2);
console.log('Resultado Multiplicación: ', op3);
console.log('Resultado División: ', op4);
console.log('Resultado Resto: ', op5);