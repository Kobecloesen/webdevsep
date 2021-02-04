const url = require('url')

let result = url.parse('https://www.google.com/search?client=firefox-b-d&q=achterstand+engels')
console.log(result)
console.log(result.query)