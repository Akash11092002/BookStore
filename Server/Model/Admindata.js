const mongoose = require('mongoose');
const Admindata= new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        author:{type:String,required:true},
        image:{type:String,required:true},
        category:{type:String,required:true},
        price:{type:String,required:true},
        link:{type:String , required:true}
    }

)
const adata = mongoose.model('Adata', Admindata);
module.exports = adata;