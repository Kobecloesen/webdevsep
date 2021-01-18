/* 

install express.js
npm i express

*/

const express = require('express')
const app = express();
const {homeController, apiController} = require('./controller/index')


app.get('/',homeController)

app.get('/api',apiController)

app.listen(3003,()=>{
    console.log('Server is running...')
})