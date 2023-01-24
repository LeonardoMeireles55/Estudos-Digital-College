function calculaMedia() {
    var nome = document.getElementById(inNome)
    var nota1 = document.getElementById(inNota1)
    var nota2 = document.getElementById(inNota2)
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    media = (nota1 + nota2) / 2;
    outMedia.textContent = "Média do: " + nome + " é " + media.toFixed(2);
    outSituacao = document.getElementById("outSituacao");
    if (media >= 7) {
        outSituacao.textContent = "Aluno aprovado!";
        outSituacao.style.color = "blue";
        } else if (media >=4) {
            outSituacao.textContent = "Aluno em recuperação!"
            outSituacao.style.color = "brown"
        } else {
        outSituacao.textContent = "Aluno reprovado!";
        outSituacao.style.color = "red";
    }
}

var btcalculaMedia = document.getElementById("btcalculaMedia");
btcalculaMedia.addEventListener("click", calculaMedia);