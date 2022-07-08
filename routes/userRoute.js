const express = require("express");
const router = express.Router()
const userCtr = require("../controllers/userCtr")

router.post("/new",userCtr.newUser)
router.get("/",userCtr.fetchUsers)
router.get("/:id",userCtr.fetchUser)
router.patch("/update/:id",userCtr.updateUser)
router.delete("/delete/:id",userCtr.deleteUser)
router.patch("/hidden/:id",userCtr.hiddenUser)
router.post("/auth/:id",userCtr.authUser)

module.exports=router