// Aula 1 - Cálculo de custo de viagem
let valorComb = 6.07;
let consumoPorKm = 12;
let distanciaTotal = 768;

function calcularCustoViagem(valorComb, consumoPorKm, distanciaTotal) {
    let custoTotal = (distanciaTotal / consumoPorKm) * valorComb;
    return custoTotal;
}

let resultado = calcularCustoViagem(valorComb, consumoPorKm, distanciaTotal);
console.log("O custo total da viagem é: R$" + resultado);