const express = require('express')
const app = express();
const {homepageController,loginController,aboutController,contactController,portfolioController,registerController,apiController} = require('./controller/index')
const bodyParser = require('body-parser')
let apiToken = '123456'
//npm install nodemon -g

app.use(bodyParser({
    extended:true
}))

function loginCheck(req,res,next){
    let isLogged = false;
    if(!isLogged) {
        console.log('middleware is running and isLogged=true')
        next()
    }
}

function captureData(req,res,next){
    console.log(req.body)
    next()
}

function checkToken(req,res,next){
    let token = req.headers.token
    console.log(token)
    if(token!=apiToken){
        res.status(500).send('invalid token')
    }
    next()
}
//app.use(loginCheck) //application level middleware

app.get('/',homepageController);
app.get('/login',loginCheck,loginController); // router level middleware
app.get('/about',aboutController);
app.get('/contact',contactController);
app.get('/portfolio',portfolioController);
app.post('/register',captureData,registerController);
app.get('/api',checkToken, apiController)







app.listen(3002,()=>{
    console.log('server is running...')
})