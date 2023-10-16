const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const deliverSchema = new mongoose.Schema({
    deliverName: {type : String, required:true},
    deliverEmail:{type : String, required:true, unique:true},
   deliverPassword: {type : String, required:true},
})

deliverSchema.virtual('repeatPassword').set(function(value){
    if(value !==this.deliverPassword){
        throw new mongoose.MongooseError('password missmatch')
    }
})

deliverSchema.pre('save', async function () {
   const hash = await bcrypt.hash(this.deliverPassword, 11)
   this.deliverPassword = hash
})

const Deliver = mongoose.model('Deliver', deliverSchema)

module.exports = Deliver