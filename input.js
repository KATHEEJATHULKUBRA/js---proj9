const guessInput = document.getElementById("guess-input");
guessInput.focus()
guessInput.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter'){
        console.log(guessInput.value.trim());
    }
})