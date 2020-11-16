// switch statement

var number = 5;

switch(number){
    case 0:
        console.log('0');
    case 3:
        console.log('3');
    case 5:
        console.log('5');
        break;
    default:
        console.log('this is the default message')
}

console.log(new Date().getDay())

switch(new Date().getDay()){
    case 0:
        console.log("zondag")
    case 1:
        console.log("maandag")
    case 2:
        console.log("dinsdag")
    case 3:
        console.log("woensdag")
    case 4:
        console.log("donderdag")
    case 5:
        console.log("vrijdag")
    case 6:
        console.log("zaterdag")

}

//for loops / while / if else

var correctanswer = "Jackie"

function getanswer(param){
    console.log("it's correct and answer is", param)

}

switch(correctanswer){
    case "Jackie":
        getanswer(correctanswer)
        break;
    case "Michael":
        console.log("test");

    default:
        console.log("testing switch")
}

switch(true){
    case true:
        //
    case false:
        //
    default:
        //
}