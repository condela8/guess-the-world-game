//Global variables

const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton= document.querySelector(".guess");
const textInput= document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingGuess = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hideButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetter = [];

//function to add placeholders
const addPlaceholders = function(word){
  const placeholders =[];
  for(const letters of word){
    console.log(letters);
    placeholders.push("●");
 }
 wordInProgress.innerText = placeholders.join("");
};
addPlaceholders(word);

//Event listener for the button

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    const inputValue =textInput.value;
    console.log(inputValue);
    const validInput = checkInput(inputValue);
    textInput.value = "";
    //console.log(validInput);
    if(validInput){
        makeGuess(inputValue);_
    }
    textInput.value = "";

});

//Function to check player' s input
const checkInput = function(input){
    const acceptedLetter = /[a-zA-Z]/;
   //Imptyimput
    if(input.length===0){
        message.innerText = "Enter a letter";

    }
    //More than one letter input
    else if (input.length>1){
        message.innerText = "Enter only one letter";
    }

    // Input character
    else if(!input.match(acceptedLetter)){
        message.innerText = " You entered a character, please enter a letter ";

    }
    //Input a single letter
    else{
        return input;
    }
    
};
const makeGuess = function(letter){
    letter=letter.toUpperCase();
    if(guessedLetter.includes(letter)){
        message.innerText = "Letter already guessed try again";

    }
    else{
        guessedLetter.push(letter);
        console.log(guessedLetter);
        showGuessedLetters();
        updateWordInProgress(guessedLetter);
    }
   
};
const showGuessedLetters = function(){
    guessedLettersList.innerText = "";
    for(const letter of guessedLetter){
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);

    }
}
const updateWordInProgress = function(guessedLetter){

    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const newWordArray = [];
    console.log(wordArray);
    for(const letter of wordArray){
        if(guessedLetter.includes(letter)){
            newWordArray.push(letter.toUpperCase());

        }
        else{
            newWordArray.push("●");
        }

    }
    wordInProgress.innerText = newWordArray.join("");
    checkWinner();
  
}

const checkWinner = function (){
    if(word.toUpperCase()===wordInProgress.innerText){
        message.classList.add("win");
        message.innerText = 
        <p class="highlight">You guessed correct the word! Congrats!</p>

    }

}




































