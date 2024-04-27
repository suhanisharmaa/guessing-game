let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.getElementById("wrong");
let guesses = document.getElementById("guesses");

// Generate a random integer between 1 and 100 (inclusive)
let randomNumber = Math.floor(Math.random() * 100) + 1;
let numguesses = 0;

btn.addEventListener("click",()=>{
    guessNumber();
})

function guessNumber(){
    if(input.value<1 || input.value > 100 || isNaN(input.value)){
        wrong.innerHTML = "Please enter a valid number between 1 and 100"
    }
    else{
        numguesses++;
        guesses.innerHTML = "No of guesses : "+numguesses;

        if(input.value > randomNumber){
            wrong.innerHTML = "You guessed too high!"
            input.value = '';
        }
        else if(input.value < randomNumber){
            wrong.innerHTML = "You guessed too low!"
            input.value = '';
        }
        else{
            wrong.innerHTML = "Congratulations you guessed the right number!"
            btn.disabled = true;
            setTimeout(()=>{
                resetGame()
            },5000);
        }
    }

    function resetGame(){
        numguesses = 0;
        btn.disabled = false;
        input.value = '';
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guesses.innerHTML = "No of guesses : 0";
        wrong.innerHTML = "Enter a number between 1 and 100";
    }
}