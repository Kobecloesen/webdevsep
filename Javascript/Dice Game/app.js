var diceNumber = Math.floor(Math.random() * 6)+1  


function Throwdice1(){
        return dice1.innerText= diceNumber
    }
function Throwdice2(){
        return dice2.innerText= diceNumber
    }

    document.getElementById("Button").addEventListener("click", Throwdice1, Throwdice2 );