Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log("quadro de honrra")
    } else if (nota.entre(7, 8.99)) {
        console.log("aprovado")
    } else if (nota.entre(4, 6.99)) {
        console.log("recuperação")
    } else {
        console.log("invalido")
    }
    console.log("fim")
    }
    
    imprimirResultado(7)
    imprimirResultado(-1)