let nota1 = 0
let nota2 = 0
let nota3 = 0
let mediaFinal = (nota1 + nota2 + nota3) / 3

    if (mediaFinal < 5) {
        console.log("reprovado, nota final = " + mediaFinal)
    }else if (mediaFinal <= 7) {
        console.log("em recuperacao, nota final = " + mediaFinal)
    }else {
        console.log("aprovado, nota final = " + mediaFinal)
    }



