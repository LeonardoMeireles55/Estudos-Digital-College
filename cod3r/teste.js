var mega = new Array(6);
let numSet = new Set();
for (var i = 0; i < mega.length; i++) {
    var randNum;
    do {
        randNum = Math.round((Math.random() * 9) + 1);
    } while (numSet.has(randNum))
    numSet.add(randNum);
    mega[i] = randNum;
}
console.log(`O numero escolhido foi: ${(mega)}`)
console.log(numSet)
console.log(randNum)