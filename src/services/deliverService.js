const Deliver = require('../models/Deliver')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')
const { SECRET2 } = require('../constants')

exports.singupForDeliver = (userData) => {
   console.log(userData)
   return Deliver.create(userData)
}

exports.loginForDeliver = async (deliverEmail, deliverPassword) => {
 
   const user = await Deliver.findOne({ deliverEmail })
   console.log(user)
   
   if (!user) {
      throw new Error('invalid username or password')
   }
   const isValid = await bcrypt.compare(deliverPassword, user.deliverPassword)
   if (!isValid) {
      throw new Error('invalid ursername or passwor')
   }

   const payload = {
      _id: user._id,
      deliverEmail: user.deliverEmail
   }
   

   const token = await jwt.sign(payload, SECRET2, { expiresIn: "10d" })
   return token
}