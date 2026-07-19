class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calculatImc() {
        return this.peso / (this.altura * this.altura)
    }
    classificarImc() {
        const imc = this.calculatImc();
        if (imc < 18.5) {
            return ("abaixo do peso")
        } else if (imc <= 25) {
            return ("peso normal")
        } else if (imc <= 30) {
            return ("acima do peso")
        } else if (imc <= 40) {
            return ("obeso")
        } else {
        } return ("obesidade grave")
    }
}
const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());
const victor = new Pessoa('victor', 63, 1.75);
console.log(victor.classificarImc())
const daniel = new Pessoa('daniel', 83, 1.76);
console.log(daniel.classificarImc());