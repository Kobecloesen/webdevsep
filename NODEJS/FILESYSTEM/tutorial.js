const fs = require('fs')

//READFILE
fs.readFile('./readme.txt','utf8',(err, content)=>{
    console.log(content)
})

//APPENDFILE
fs.appendFile('.readme.txt')