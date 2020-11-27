var inputKey = document.querySelector('#inputKey')
var inputValue = document.querySelector('#inputValue')
var insertBtn = document.querySelector('#buttonInsert')
let getDataFromStorage = document.querySelector('#getDataFromStorage')
let output = document.querySelector('.output')

//eventlistener
insertBtn.addEventListener('click',function(e){
    console.log('testing')    
    console.log(inputKey.value)
    console.log(inputValue.value)
    return sessionStorage.setItem(inputKey.value,inputValue.value)
})


let sessionData;

getDataFromStorage.addEventListener('click', function(e){
    sessionData=[]
    let temp;
    for(let index = 0; index < sessionStorage.length; index++){
        //console.log(index)
            let key = sessionStorage.key(index)
        //console.log(key)
            let value = sessionStorage.getItem(key)
        //console.log(value)
            console.log(`Key:${key} Value:${value}`)
            temp={
                key:key,
                value:value
            }
            sessionData.push(temp)
            output.innerHTML+=`Key:${key} Value:${value}<br>`
    }
    console.log(sessionData)
    e.preventDefault(e)
})

