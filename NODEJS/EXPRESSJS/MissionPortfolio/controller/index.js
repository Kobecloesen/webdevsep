const homepageController = (req,res)=>{
    res.send('Homepage Kobe Cloesen')
}

const loginController = (req,res)=>{
    res.send('Login Section')
}

const aboutController = (req,res)=>{
    res.send('about Kobe Cloesen')
}

const contactController = (req,res)=>{
    res.send('contact Kobe Cloesen')
}

const portfolioController = (req,res)=>{
    res.send('Portfolio Kobe Cloesen')
}

const registerController = (req,res)=>{
    console.log(req.body)
    res.send('Register Section')
}

const apiController = (req,res)=>{
    res.json({
        id:1,
        title:"Lorem Ipsum"
    })
}

module.exports = {homepageController,loginController,aboutController,contactController,portfolioController,registerController,apiController}