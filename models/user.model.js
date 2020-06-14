var mongoose=require('mongoose');
var userSchema= new mongoose.Schema({
    user_name:String,
    phone :String,
    email: String,
    name: String,
    password:String,
    checkpassword:String,

});
 var User=mongoose.model('User',userSchema,'users');
 module.exports=User;