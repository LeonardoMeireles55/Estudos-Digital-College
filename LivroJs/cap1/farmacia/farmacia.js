function calculaPromocao() {
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    var promocao = Math.floor(preco) * 2 
    outMedicamento.textContent = ("Promoção de " + medicamento);
    outPromocao.textContent = ("Leve dois por apenas :" + promocao);

}
    var mostraPromocao = document.getElementById("btCalcula");
    mostraPromocao.addEventListener("click", calculaPromocao); 