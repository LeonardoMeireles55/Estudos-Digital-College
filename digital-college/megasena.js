function run(){
    var mega = new Array(6);
    let newNum = new Set();
    document.getElementById("outResultado");
    for (var i = 0; i < mega.length; i++) {
        
        do {
            newMega = Math.round((Math.random() * 59) + 1);
        } while (newNum.has(newMega))
        console.log(newNum.has(newMega))
        newNum.add(newMega)
        mega[i] = newMega
        console.log(mega)
        outResultado.textContent = mega.join("-")
        
    }
    
    }
    window.onload = function(){
    document.getElementById("botao");
    botao.addEventListener("click",run);
    }