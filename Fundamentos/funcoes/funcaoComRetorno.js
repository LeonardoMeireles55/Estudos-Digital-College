function sempreRetornaUm() {
    return 1
}

let valor = sempreRetornaUm();
console.log(valor);

function textoOuNumero(retornaTexto) {
    if (retornaTexto) {
        return "Sou um Texto!"
        }
        else {
            return 123;
        }
}

let texto = textoOuNumero(false);
console.log(texto)

function textoOuNumero1(retornaTexto) {
    return retornaTexto ? "Sou um texto" : 123; 
    
}
console.log(textoOuNumero1(true))