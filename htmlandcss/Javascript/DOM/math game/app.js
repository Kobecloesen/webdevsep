let operators = ["+","-","/","*"]


//operators[Math.round(Math.random()*3)-1]

console.log(operators[Math.round(Math.random()*4)-1]);

var number1 = Math.floor(Math.random()*25)+1;
var number2 = Math.floor(Math.random()*25)+1;
var deelteken = operators[Math.round(Math.random()*4)-1]
var result = Number(number1)+operators[Math.round(Math.random()*4)-1]+Number(number2);

//var guess = document.getElementById("question");
document.getElementById("question").innerHTML=result//Number(number1)+operators[Math.round(Math.random()*4)-1]+Number(number2);

//var result = Number(number1)+operators[Math.round(Math.random()*4)-1]+Number(number2);

document.getElementById("question").value = result;
//console.log(result);

function calculation(){
    if(deelteken== "+"){
        number1+number2
        
    }
    else if(deelteken== "-"){
        number1-number2
    }
    else if(deelteken== "/"){
        number1/number2
    }
    else if(deelteken== "*"){
        number1*number2
    }

}

console.log(result);

//document.getElementById("question").addEventListener(result)





//console.log(Number(number1),operators[Math.round(Math.random()*4)-1],Number(number2))