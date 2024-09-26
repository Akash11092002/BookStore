const mongoose = require('mongoose');
const Admin= new mongoose.Schema(
    {
            username:{type:String,required:true},
            
             email:{type:String,required:true,unique:true},
             password :{type:String,required:true}
       
    }

)
const admindata = mongoose.model('Admindata', Admin);
module.exports = admindata;