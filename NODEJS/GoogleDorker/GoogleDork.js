/* 
PROJECT PLAN

google-scraper ['https://www.npmjs.com/package/google-it']
http ['http']
fs ['fs']
yargs - commandline args parser ['https://www.npmjs.com/package/yargs']

*/ 

const GoogleSearch = require('google-search')
const http = require('http')




let argv = require('yargs/yargs')(process.argv.slice(2))
.usage('$0 --dork "intitle:Index of mp3" --output[filename.json]') //optional
.demandOption(['dork']) //required
.argv 


console.log(argv.dork) // undefind as default 
console.log(argv.output)  //filename.json??

GoogleSearch({'query':'intecbrussel'}).then(results=>{
    console.log(results)
})