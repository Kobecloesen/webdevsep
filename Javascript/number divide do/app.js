var i = 0;
var sum=0

/*while (i<=100){
    
    if (i%3 === 0)
    if (i%5 === 0)
    

    console.log(i);
    console.log("sum results",sum);
 
    i++
}*/



while (i<=100){
    if (i%3 ===0 && i%5 ===0){
        console.log(i);
        sum += i
    }
    i++;
    console.log("sum results",sum);
}


