// HTTP  request

const express = require('express')
const app = express.Router()
const {GetMethod, PostMethod,UpdateMethod,DeleteMethod} = require('./controller/index')

// get method

app.get('/',GetMethod)


app.listen(3008,()=>console.log('Server is running...')) //--> foutmelding "app.listen is not a function"
//app.get(3004,()=>console.log('Server is running...'))

