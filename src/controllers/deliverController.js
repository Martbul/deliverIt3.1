const router = require('express').Router()
const deliverService = require('../services/deliverService')

router.get('/singup', (req, res) => {
   res.render('singup-deliver')
})

router.post('/singup',async (req, res) => {
   //const { deliverName:username, deliverEmail:email, deliverPassword:password } = req.body

   const deliverName = req.body.username
   const deliverEmail = req.body.email
   const deliverPassword = req.body.password
   
   await deliverService.singupForDeliver({ deliverName, deliverEmail, deliverPassword })
   
   res.redirect('/delivers/login')
})



router.get('/login',(req,res) => {
    res.render('login-deliver')
})


router.post("/login",async (req, res) => {
  //find the user
    const {email,password} = req.body
    const token = await deliverService.loginForDeliver(email,password)

    res.cookie('authDeliver',token,{httpOnly:true})
    res.redirect('/')
})


module.exports = router