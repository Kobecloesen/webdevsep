// functions

// function syntax
function myFunctionName(){
    console.log('before return: function')
    return 'this is my first function'
    console.log('after return: function')
}

console.log(myFunctionName()); //invoked

function calculateIt(a,b){
    console.log(a,b);
    return a+b;
}

let sumResult = calculateIt(5,6);
console.log(sumResult)

function getUser(userobj){
    return userobj.firstname;
}

let student = {
    firstname: 'Jack',
    lastname: 'Sparrow'
}

let showsUserName = getUser(student);

console.log(getUser)


// CTRL + K + C > comment it
// CTRL + K + U > uncomment it


let autoDrive= {

    forward:function(){console.log('Forward')},
    backward:function(){console.log('Backward')},
    turnleft:function(){console.log('Turn Left!')},
    turnright:function(){console.log('Turn Right!')},


}

autoDrive.turnleft();
autoDrive.backward();
autoDrive.turnright();
autoDrive.forward();


function printservice(){
    let localvarible = 'This is a local variable';
    console.log(localvarible)
}

printservice();



//global variable

let Globalvariable = 'this is a global variable';

function consoleservice(){
    console.log(Globalvariable)
}

consoleservice();


