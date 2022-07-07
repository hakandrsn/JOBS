const express = require("express");
const router = express.Router()
router.get("/",(req,res,next)=>{
    console.log("task")
    res.json("json oldu")
    next()
})

module.exports=router