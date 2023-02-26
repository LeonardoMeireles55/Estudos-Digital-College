//se nota maior ou igual a 7 = Aprovado!
//se nota de 4 a 6.9 = recuperação
//se não reprovado!


const nota1 = 10;
const nota2= 8;
const nota3 = 5;

function avaliaNotas(n1, n2){
    return n1 <= n2 ? n1 : n2
}
function mediaDeDuasMaiores(n1, n2, n3) {
    const menorNota = avaliaNotas(n1, avaliaNotas(n2, n3));

    if (menorNota === n1) {
        return (n2 + n3) / 2
    } else if (menorNota === n2) {
        return (n1 + n3) / 2
    } else if (menorNota === n3) {
        return (n1 + n2) / 2
    } else {
        return "invalido"; 
    }
    }


function mediaParaStatus(mediaDeDuasMaiores) {
    if (mediaDeDuasMaiores >= 7) {
        return "Aprovado"
    } else if (mediaDeDuasMaiores >= 4) {
        return "Recuperação"
    } else {
        return "reprovado!"
    }


}

const mediaFinal = mediaDeDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resulado final do aluno é ${statusFinal}!`);