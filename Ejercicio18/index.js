//Dependiendo de si escribimos una vocal o una consonante en el segundo input su contenido se mostrará de un color distinto.
const vocales = ["a","e","i","o","u","A","E","I","O","U"];

function changeColor(){
    var elemento = document.getElementById("segundoInput");
    
    elemento.className = "consonante";

    for(let j=0; j<vocales.length; j++){
            
        if(elemento.value[elemento.value.length-1] == vocales[j]){
            
            elemento.className = "vocal";
            break;
        }
    }
}