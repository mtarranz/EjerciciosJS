const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const mesesSieteLetras = meses.filter(mes => mes.length > 7)
.map(mes => mes.toLowerCase());

const numMeses=mesesSieteLetras.length;

console.log("Hay", numMeses, "meses de más de siete letras y son:", mesesSieteLetras);