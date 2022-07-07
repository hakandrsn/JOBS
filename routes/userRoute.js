const express = require("express");
const router = express.Router()
router.get("/",(req,res,next)=>{
    console.log("user")
    res.json("json oldu")
    next()
})

module.exports=router