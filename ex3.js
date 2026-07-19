const { gets, print } = require('./funcoes-auxiliares3');

const valorSalario = gets();
const valorBeneficio = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}
function pegarAliqueota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}
const aliqueotaImposto = pegarAliqueota(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario, aliqueotaImposto);
const valorATransferir = valorSalario - valorImposto + valorBeneficio;
print(valorATransferir);