const letraDni=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Por favor indique su número de DNI");

if (dni<0 || dni>99999999) {
    alert("El número proporcionado no es válido");
}
else{
    resto = dni%23;
    alert("La letra de su DNI es " + letraDni[resto]);
}