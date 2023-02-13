
// function com com parametro e return. -----> melhor forma.
function somar(a,b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30, 56));

//function com parametro e sem retorno.
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}
exibirMultiplicacao(2, 2);

//function sem parametro e com retorno.
function retornarDataAtual() {
    return new Date();
}
console.log(retornarDataAtual())

////function sem parametro e com retorno.
function exibirHoraAtual() {
    console.log(new Date().getHours())
}

exibirHoraAtual();