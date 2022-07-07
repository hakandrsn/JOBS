const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
    name:String,
    lastName:String,
    age:String,
    username:String,
    email:String,
    password:String,
    tc:String,

},{timestamps:true,collection:"users"});

UserSchema.pre("save",()=>{
    console.log("hakan gird")
})

const User = mongoose.model("user",UserSchema);
module.exports= User