function retornarUmaFuncao() {
    return function () {
        return "boa Tarde"
    }
}
console.log(retornarUmaFuncao)
console.log(retornarUmaFuncao())
console.log(retornarUmaFuncao()())