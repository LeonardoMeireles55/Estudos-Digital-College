//Função construtora (Classe) ---> Objeto
//Primeira letra maiuscula. 
function Data(dia = 1, mes = 1, ano = 2023) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const d2 = new Data(24, 12, 1995)

console.log(d2)