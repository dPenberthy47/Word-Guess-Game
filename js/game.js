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
    "ark patrol",
    "disclosure",
    ];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameRunning = false;
var pickedWord = "";
var pickedWordPlaceholder = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//create a new game function
function newGame() {
    gameRunning = true;
    guessesLeft = 12;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholder = [];

    //pick a new word
    pickedWord = artistsWordBank[Math.floor(Math.random() * artistsWordBank.length)];
    console.log(pickedWord);

    //create placeholders out of new pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === " ") {
            pickedWordPlaceholder.push(" - ");
        }   else {
            pickedWordPlaceholder.push("_ ");
        }
    }

    //write all new game info to DOM
    guessesRemaining.textContent = guessesLeft;
    placeholders.textContent = pickedWordPlaceholder.join('');
    guessedLetters.textContent = incorrectLetterBank;
   
}

//letterGuess function take sin the letteryou pressed and sees if it's in the selected word
function letterGuess(letter) {
    console.log(letter); //don't want the game to run if game running is false
    if (gameRunning && guessedLetterBank(letter) === -1) {
        //run game logic
        guessedLetterBank.push(letter);

        //check if guessed letter is in my picked word

        for (var i = 0; i < pickedWord.length; i++) {
            //convert both values to lower case so that I can compare them correctly
            if (pickedWord[i].toLowerCase() === pickedWordPlaceholder.toLowerCase()) {
                //if a match, swap out that character in the placeholder with the actual letter
                pickedWordPlaceholder[i] === pickedWord[i];

            }
        }

        placeholders.textContent = pickedWordPlaceholder.join("");

    }
    else  {
        if (gameRunning === false) {
        alert("Cliock on the button to start the game!")
        } else {
            alert("You've already guessed this letter!")
        }
    }
}

//check incorrect letter
if ("") {

} 

//check loss
if ("") {

}
//check win
if ("") {

}
//add event listener for new game button
newGameButton.addEventListener("click", newGame); 

//add onkeyup event to trigger letterguess