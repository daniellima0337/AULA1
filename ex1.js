
const { gets, print } = require('./funcoes-auxiliares1.js');
const media = gets();

if (media < 5) {
    print("reprovado");
} else if (media < 7) {
    print("recuperação");
} else {
    print("aprovado");
};