const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mailId:String,
    password:String,
    phone:Number,
    // rePassword:String
})


mongoose.model('users',schema);
module.exports=mongoose.model('users')
