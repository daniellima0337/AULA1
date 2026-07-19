const precoEtanol = 4.10;
const precoGasolina = 5.80;
const tipoCombustivel = 'etanol'
const gastoMedioPorKm = 10;
const distanciaTotal = 200;

const litrosConsumidos = distanciaTotal / gastoMedioPorKm;
let valorGasto = 0;

    if (tipoCombustivel === 'gasolina') {
        valorGasto = litrosConsumidos * precoGasolina
    }else {
        valorGasto = litrosConsumidos * precoEtanol
    }
console.log("o valor gasto sera R$" + valorGasto.toFixed(2));