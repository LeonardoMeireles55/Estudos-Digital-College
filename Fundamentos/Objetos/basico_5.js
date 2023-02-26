const cliente = {
    codigo: 1654,
    nome: "Leo",
    endereco: {
        logradouro: "Rua: armando monteiro",
        numero: 123,
        pontodeRef: [
            {nome: "Mercadinho Zé do amancio", muitoProximo: true},
            {nome: "Espetinho do rafael", muitoProximo: false},
        ]
    },
        nomeFilhos: "Ovos, Juliets, Leia",
    };


console.log(cliente.endereco.pontodeRef[1].muitoProximo);