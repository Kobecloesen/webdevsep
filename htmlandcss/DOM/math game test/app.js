var number1 = Math.floor(Math.random()*25)+1;
var number2 = Math.floor(Math.random()*25)+1;
var guess = document.getElementById("question");
var result = Number(number1)+operators[Math.round(Math.random()*4)-1]+Number(number2);


document.getElementById("question").value = result;