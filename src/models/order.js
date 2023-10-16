const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
   name: {type : String, required:true},
   order: {type : String, required:true},
   address: {type : String, required:true},
   dayForDelivery:{type : String, required:true},
timeForDelivery:{type : String, required:true},
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;