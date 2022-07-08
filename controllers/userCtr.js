const User = require("../models/User")
const err = require("http-errors")
const fetchUsers =async(req,res,next) => {
    console.log("fetchuser")
    res.send("al sna data")
}
const fetchUser = async (req,res,next) => {
    try{
        const res = await User
            if(!res){
                throw err(404,"message")
            }else {
                res.status(200).json(res)
            }
    }catch(e) {
        next(e)
    }
}

module.exports = {
    fetchUsers,
    fetchUser,
    updateUser,
    deleteUser,
    hiddenUser,
    authUser
}