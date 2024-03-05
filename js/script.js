//Global variables

const guessedLetters = document.querySelector(".guessed-letters");
const guessButton= document.querySelector(".guess");
const textInput= document.querySelector(".text");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingGuess = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hideButton = document.querySelector(".play-again");

const word = "magnolia";

//function to add placeholders
const addPlaceholders = function(text){
  const placeholders =[];
  for(const letters of text){
    console.log(letters);
    placeholders.push("●");
 }
 wordInProgress.innerText = placeholders.join("");
}

//Event listener for the button
addPlaceholders(word);
guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const inputValue =textInput.value;
    console.log(inputValue);
    textInput.value = "";
});