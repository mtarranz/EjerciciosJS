let frase=prompt("Introduzca una frase");

function comprobarFrase(frase){
    var resultado="";
    var minusculas=0;
    var mayusculas=0;

    frase=frase.replace(/\s+/g, '');

    alert(frase);

    for (let i=0; i<frase.length; i++){
        
        if(frase.charAt(i) == frase.charAt(i).toLowerCase()){
            minusculas+=1;
        }
        else{
            mayusculas+=1;
        }
    }
    if(minusculas>0 && mayusculas>0){
        return resultado="mayúsculas y minúsculas.";
    }
    else if(minusculas>0){
        return resultado="minúsculas";
    }
    else{
        return resultado="mayúsculas";
    }
}

alert("La frase está escrita en " + comprobarFrase(frase));