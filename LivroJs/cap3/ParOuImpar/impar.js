function compara() {
    var inNumero = document.getElementById("inNumero");
    var inNumero = Number(inNumero.value);
    var teste = inNumero 
    if (isNaN(teste)) {
        alert("digite apenas números!")
        return;
    }
    if (teste % 2 != 0) {
        alert("numero impar!")
        } else {
            alert("numero par!")
        }
}
btTestar = document.getElementById("btTestar")
btTestar.addEventListener("click", compara)