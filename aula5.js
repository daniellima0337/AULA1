let precoProduto = 100
let metodoPagamento = "credito 3x ou mais"
let valorFinal = 0

if (metodoPagamento === "debito") {
    valorFinal = (precoProduto / 1.10)
    console.log("valor a ser pago R$" + valorFinal.toFixed(2))
} else if (metodoPagamento === "dinheiro ou pix") {
    valorFinal = (precoProduto / 1.15)
    console.log("valor a ser pago R$" + valorFinal)
} else if (metodoPagamento === " credito avista/2x") {
    console.log("valor a ser pago R$" + valorFinal.toFixed(2))
} else if (metodoPagamento === "credito 3x ou mais") {
    valorFinal = (precoProduto * 1.10)
    console.log("valor a ser pago R$" + valorFinal.toFixed(2))
}