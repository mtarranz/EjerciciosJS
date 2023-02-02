class Cuadrado{
    constructor (nombre, lado){
        this.nombre = nombre;
        this.lado = lado;
    }
    //perímetro
    perimetro(nombre, lado){
        console.log("El perímetro del", nombre, "es", lado*4);
    }
    //área
    area(nombre, lado){
        console.log("El área del", nombre, "es", lado*2);
    }
};

const cuadradoPeq = new Cuadrado("Cuadrado Pequeño", 2);
const cuadradoMed = new Cuadrado("Cuadrado Mediano", 5);
const cuadradoGran = new Cuadrado("Cuadrado Grande", 10);

cuadradoPeq.perimetro(cuadradoPeq.nombre, cuadradoPeq.lado);
cuadradoPeq.area(cuadradoPeq.nombre, cuadradoPeq.lado);
cuadradoMed.perimetro(cuadradoMed.nombre, cuadradoMed.lado);
cuadradoMed.area(cuadradoMed.nombre, cuadradoMed.lado);
cuadradoGran.perimetro(cuadradoGran.nombre, cuadradoGran.lado);
cuadradoGran.area(cuadradoGran.nombre, cuadradoGran.lado);