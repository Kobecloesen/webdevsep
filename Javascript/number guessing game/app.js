var guess= document.getElementById("estimate");


var correctNumber = Math.floor(Math.random() * 10)+1  // between 1-10


console.log('correct:', correctNumber)

function getGuess(){
    console.log('guess:',Number(guess.value))
}

function isGuessCorrect(){
    if(Number(guess.value)==correctNumber){
        console.log('correct')
        return result.innerText=`correct`
    }

    else if(Number(guess.value)>correctNumber){
        console.log('go lower')
        return result.innerText=`go lower`
    }
      
    else {
        console.log('go higher')
        return result.innerText=`go higher`
    }
}


document.getElementById("button").addEventListener("click", isGuessCorrect );