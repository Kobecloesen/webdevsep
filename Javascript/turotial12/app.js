/* 

toString(); the toString() method retruns a number to a string.
Number();
parseInt();
parseFloat();

*/

let mynumber = 10;
console.log(typeof mynumber);
let typeOfVariable = mynumber.toString();
console.log(typeOfVariable);
console.log(typeof typeOfVariable);

let sum = "5" / "5";
console.log(sum);

let sum1 = 5 / 5;
console.log(sum1);

let salarypermonth = 1652.948;
// salaryPerMonth = salaryPerMonth.toExponential(4) // returns a string, with a number rounded and written using exponential notation.
salarypermonth = salarypermonth.toFixed(2);
console.log(salarypermonth);


var mynumbervar = "1345" // string data type

var showinconsole = parseInt(mynumbervar);


showinconsole = Number.isFinite("5");
showinconsole = Number.isInteger("5");


function fixedTheSalary(salary) {
    return `Salary> ${Number.parseFloat(salary).toFixed(2)}`
}


let result = fixedTheSalary('2.3432')
console.log(result)


console.log(showinConsole, typeof showinConsole)