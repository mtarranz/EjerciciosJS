const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const impares = numbers.filter (function(number){
    return number % 2 != 0;
})
const pares = numbers.filter (function(number){
    return number % 2 == 0;
})

console.log('Nuúmeros impares',impares);
console.log('Números pares', pares);