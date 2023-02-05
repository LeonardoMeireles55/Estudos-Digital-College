var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

var guessCount = 1;
var resetGame;

function conferirPalpite() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Palpites anteriores: "
    }
    guesses.textContent += userGuess + " "

    if (userGuess == numeroAleatorio) {
        lastResult.textContent = "Você ganhou! ";
        lowOrHi.textContent = "";
        endGame();
    } else if (guessCount == 12) {
        lastResult.textContent = ("Acabou! ");
        lowOrHi.textContent = ("");
        endGame();
    } else {
        lastResult.textContent = ("Errou! ");
        if (userGuess < numeroAleatorio) {
            lowOrHi.textContent = ("muito baixo!");
        } else if (userGuess > numeroAleatorio) {
            lowOrHi.textContent = ("muito alto!");
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
guessSubmit.addEventListener("click", conferirPalpite);

function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    btResetGame = document.createElement("button");
    btResetGame.textContent = "New Game!";
    document.body.appendChild(btResetGame);
    btResetGame.addEventListener("click", resetGame);
}

function resetGame () {
    guessCount = 1

    var resultParas = document.querySelectorAll(".resultParas p")
    for (var i = 0; i < resultParas.length ; i++) {
    resultParas[i].textContent = "";
}

btResetGame.parentNode.removeChild(btResetGame)

guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = "";
guessField.focus();
numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}