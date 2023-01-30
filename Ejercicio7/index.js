const arrayNum = [1,2,3,4,5,6,7,8,9];

function sumaNumerosPares(arrayNum){
    var suma=0
    //Sumar números pares
    for (let i =0; i<arrayNum.length; i++){
        if(arrayNum[i]%2 == 0){

            suma+=arrayNum[i];
        }
    }
    return suma;
}

console.log(sumaNumerosPares(arrayNum));