//grab reference to my DOM elements
var newGameButton = document.getElementById("new-game-button");
var userWins = document.getElementById("wins");
var userLosses = document.getElementById("losses");
var guessesRemaining = document.getElementById("guessesRemaining");
var placeholders = document.getElementById("wordSpace");
var guessedLetters = document.getElementById("guessed-letters");

//create variables for game (wordBank wins lossess picked word guesses left game running guesssed letter nbank incorrect letter bank
var artistsWordBank =
    ["deadmau5",
    "florence and the machine",
    "the 1975",
    "oh wonder",
    "great good fine ok",
    "journey",
    "ark patrol"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameRunning = false;
var pickedWord = "";
var pickdWordPlaceholder = [];
var guesseeLetterBank = [];
var incorrectLetterBank = [];

//create a new game function
function newgame() {
    gameRunning = true;
    guessesLeft = 12;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholder = [];

    //pick a new word

    pickedWord = console.log(Math.floor(Math.random() * artistsWordBank.length));
    console.log(pickedWord);

    //create placeholders out of new pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            PickedWordPlaceholder.push(" ");
        }   else {
            PickedWordPlaceholder.push("_");
        }
    }

    //write all new game info to DOM
    guessesRemaining.textContent = guessesLeft;
    placeholders.textContent = pickedWordPlaceholder.join('');
    guessedLetters.textCOntent = incorrectLetterBank;
    console.log(pickedWord);
}
console.log(pickedWord);
//letterGuess function take sin the letteryou pressed and sees if it's in the selected word

//check incorrect letter

//check loss

//check win

//add event listener for new game button
//***newGameButton.addEventListener("click", newGame);

//add onkeyup event to trigger letterguess