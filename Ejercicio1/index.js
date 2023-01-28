//Calcular el volumnen y mostrarlo por consola
const volumen = 16 * 23 * 13;
console.log('volumen', volumen + ' cm3');

//Calcular el área y mostrarla por consola
const areaBase=16*23;
const areaLado1=23*13;
const areaLado2=16*13;
const areaTotal=2*areaBase+2*areaLado1+2*areaLado2;
console.log('area', areaTotal + ' m2');

//Generalización
const base=23;
const altura=13;
const ancho=16;

const volumen2=base*altura*ancho;
console.log('volumen2', volumen2 + ' cm3');

const area2=2*(base*ancho)+2*(base*altura)+2*(ancho*altura);
console.log('area2', area2 + ' m2');