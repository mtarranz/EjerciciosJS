let temperatura=prompt("Por favor indique la temperatura en grados Celsius");

function convertirFahrenheit(temperatura){
    tempF = ( temperatura * 9/5 ) + 32;
    return tempF;
}

alert("La temperatura en grados Fahrenheit es " + convertirFahrenheit(temperatura));