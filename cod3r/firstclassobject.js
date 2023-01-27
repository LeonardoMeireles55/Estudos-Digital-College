function fun1() {}

// anonima: 
const fun2 = function () {}

// armazenar dentro de um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atb de obj
const obj = {}
obj.falar = function() {return "opa"}
console.log(obj.falar())

// passar fun como param
function run(fun) {
    fun()
}
run(function(){ console.log("executando...")})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)