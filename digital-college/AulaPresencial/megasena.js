function run(){
    mega = new Set();
    document.getElementById("outResultado");
           
        do {
            mega.add(Math.round((Math.random() * 59) + 1));
        } while (mega.size < 6);
        console.log(mega);
        outResultado.textContent = mega
       
    }
     
    window.onload = function(){
    document.getElementById("botao");
    botao.addEventListener("click",run);
    }