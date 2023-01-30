const cadena = "Hola Mundo";
const vocales = ["a","e","i","o","u","á","é","í","ó","ú"];

function eliminaConsonantes(cadena){
    var cadenaSinConsonantes="";
    
    //Comprueba por cada carácter si es una vocal y la añade a la cadena de salida.
    for (let i=0; i<cadena.length; i++){

        for(let j=0; j<vocales.length; j++){
            
            if(cadena[i]==vocales[j]){

                cadenaSinConsonantes+=cadena[i];
            
            }
        }
    }
    return cadenaSinConsonantes;
}

console.log(eliminaConsonantes(cadena));