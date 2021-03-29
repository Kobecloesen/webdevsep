/* 

while 
do while 
for 
for/in
for/of



//while loop

let students = [
    {name:"Kobe", age:25},
    {name:"george", age:22},
    20,
    "Test"
]

console.log(students)


let i=0
console.log(students.length-1)
while(i<students.length){//condition??
    //code??
    i++
    console.log(students[i].name)

    
}



let i = 0

while(i<100){
    i++;
    if(i%2===0){
        if(i%5===0){
            if(i%3===0)
            console.log(i)
        }

    }
}





var answer;
var result=0;

while(answer%2!=0){
    answer = prompt('enter a number');
    result += parseInt(answer);
    result = result + parseInt(answer);
}

console.log(parseInt(result),"result")




//do while loop


do{
    //code block
}while(//condition)

var i=50
do{
    console.log(i)
    i++;

}while(i<10);



var i=50
do{
    console.log(i);
    i++
}while(i<100)




var randomnumber;

do{
    randomnumber= Math.floor(Math.random()*10)+1
    console.log(randomnumber)
}while(randomnumber=5)

*/

var number;
var sum=0;

do{
    number = Number(prompt('enter a number'))
    sum+=number;
    console.log("Sum Results=>",sum)
    console.log(number)
    console.log(number!=0)
}while(number!=0)
