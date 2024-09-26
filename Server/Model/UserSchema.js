const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobile:{type:String,required:true},
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

userSchema.methods.generateAuthtoken= async function(){
    try{
     const token =jwt.sign({_id: this._id.toString()},"mynameisakashmauryaabesecghaziabad123445567888");
    this.tokens=this.tokens.concat({token: token})
     await this.save();
    return token;
    
    }
    catch(error){

    console.log("the error part"+error);
    }
}

const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;


