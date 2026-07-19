let altura = 1.76
let peso = 84
let imc = peso / Math.pow(altura,2)

    if (imc < 18.5) {
        console.log("seu imc é: " + imc + ",abaixo do peso")
    }else if (imc <= 25) {
        console.log("seu imc é: " + imc + ",peso normal")
    }else if (imc <= 30) {
        console.log("seu imc é: " + imc + ",acima do peso")
    }else if (imc <= 40) {
        console.log("seu imc é: " + imc + ",obeso")
    }else { console.log("seu imc é: " + imc + ",obesidade grave")
    }