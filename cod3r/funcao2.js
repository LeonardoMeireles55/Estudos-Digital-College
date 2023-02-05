const funcs = []

for (let i = 0; i <10; i++) {
    funcs.push(function() {
    teste = 1
    funcs[i] = teste
    console.log(i)
    })
}
funcs[8]()