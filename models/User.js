const mongoose = require("mongoose");
const schema = mongoose.Schema;
const err = require("http-errors")
const jwt = require("jsonwebtoken")

const UserSchema = new schema({
    name:String,
    lastName:String,
    age:String,
    username:String,
    email:String,
    password:String,
    tc:String,
    isActive:Boolean,
    auth:String

},{timestamps:true,collection:"users"});

UserSchema.pre("save",()=>{
    console.log("hakan gird")
})

UserSchema.statics.login = async function(email,password) {
    try{
        const response = await User.findOne({email:email,password:password})
    }catch (e){
        throw err(400,e)
    }
}

const User = mongoose.model("user",UserSchema);
module.exports= User