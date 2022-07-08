const express = require("express");
const router = express.Router()
const userCtr = require("../controllers/userCtr")

router.get("/",userCtr.fetchUsers)

module.exports=router