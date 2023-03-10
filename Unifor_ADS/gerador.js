//Cria um novo objeto "Set" vazio e atribui-o a variavel "mega".
mega = new Set();
//laço "do-while" para gerar 6 números aleatórios únicos e adicioná-los ao conjunto "mega".
do {
    //expressão Math.random() * 59 gera um número aleatório entre 0 e 59. Em seguida, adicionamos 1 ao resultado para deslocar o intervalo para 1 a 60
    mega.add(Math.round((Math.random() * 59) + 1));

 } while (mega.size < 6);
console.log(mega);