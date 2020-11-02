// html elements (inputs)

var num1 = document.getElementById('number1');
var num2 = document.getElementById('number2');
var result = document.getElementById('result');

result.innerText="Atilla"
num1.value='401'
num2.value='300'

function sum(){
    // console.log(num1.value)
    // console.log(num2.value)
    console.log(Number(num1.value) + Number(num2.value))
    return result.innerText=`Result> ${Number(num1.value) + Number(num2.value)}`
}




console.log(Number('5')+Number('5'))

var arr = [num1.value, num2.value];

var max = arr[0];

for (var i=0; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
    }
}

console.log(max)

function largestnum(){
    console.log(max)
    return result.innerText=`Result> ${Number(num1.value) + Number(num2.value)}`
}


