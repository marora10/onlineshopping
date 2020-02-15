const mongoose = require('mongoose')
let userSchema= new mongoose.Schema({
    name: {type:String,reqiured:true},
    email: {type:String,reqiured:true},
    password: {type:String,reqiured:true}
})
module.exports= mongoose.model('User',userSchema)