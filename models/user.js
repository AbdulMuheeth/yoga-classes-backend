const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email : {type:String},
    password : {type:String},
    slot : {type:String},
    lastPaymentDate:{type:String},//month
    nextMonthSlot:{type:String},
    nextMonth:{type:Number}

})

const User = mongoose.model('user',userSchema);

module.exports = User;