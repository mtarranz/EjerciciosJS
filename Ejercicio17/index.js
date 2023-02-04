//Número de enlaces de la página.
const enlaces = document.getElementsByTagName('a');
console.log(enlaces.length);

//Dirección a la que enlanza el penúltimo enlace.
const penultimoEnlace = enlaces[enlaces.length-2];
console.log(penultimoEnlace);

//Número de enlaces del tercer párrafo.
const enlacesTercerP = document.getElementById('thirdparagraph').childElementCount;
console.log(enlacesTercerP);

//Pinta los resultados al final de la página utilizando innerHTML y creando un nodo
const parrafo = document.createElement('p');
parrafo.innerHTML = "El número de enlaces de la página es " + enlaces.length + 
                    "<br> La dirección a la que enlanza el penúltimo enlace es " + penultimoEnlace +
                    "<br> El número de enlaces del tercer párrafo es " + enlacesTercerP ;
document.body.appendChild(parrafo);