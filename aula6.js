class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.cor = cor;
        this.marca = marca;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoViagem(distancia, precoComb) {
        return distancia * this.gastoMedioPorKm * precoComb
    }
}
const uno = new Carro('fiat', 'azul', 1 / 12);
console.log(uno.calcularGastoViagem(769, 6.09));
const palio = new Carro('fiat', 'preto', 1 / 10);
console.log(palio.calcularGastoViagem(800, 6.09));
 
