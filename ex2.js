const { gets, print } = require('./funcoes-auxiliares2.js');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

// Abrimos a chave do FOR para englobar todo o processo de leitura
for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        // --- BLOCO DOS PARES ---
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        // --- BLOCO DOS ÍMPARES ---
        // Se for o primeiro ímpar que aparece OU se for menor que o menor já registrado
        if (menorNumeroImpar === 0 || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
} // Fechamos a chave do FOR aqui

print('maior numero par: ' + maiorNumeroPar);
print('menor numero impar: ' + menorNumeroImpar);