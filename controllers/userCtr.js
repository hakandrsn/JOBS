const User = require("../models/User")
const err = require("http-errors")

const newUser =async(req,res,next) => {
    console.log(req.body)
    try{
        const user = new User(req.body)
        const response = await user.save()
        if(!response){
            throw err(404,"Kullanıcılar bulunamadı")
        }else {
            res.status(200).json(response)
        }
    }catch(e) {
        next(e)
    }
}

const fetchUsers =async(req,res,next) => {
    try{
        const response = await User.find({})
        if(!response){
            throw err(404,"Kullanıcılar bulunamadı")
        }else {
            res.status(200).json(response)
        }
    }catch(e) {
        next(e)
    }
}
const fetchUser = async (req,res,next) => {
    try{
        const response = await User.findById(req.params.id)
            if(!response){
                throw err(404,"Kullanıcı bulunamadı")
            }else {
                res.status(200).json(response)
            }
    }catch(e) {
        next(e)
    }
}
const updateUser = async (req,res,next) => {
    try{
        const response = await User.findByIdAndUpdate(req.params.id,req.body)
        if(!response){
            throw err(404,"Kullanıcı Güncellenemedi")
        }else {
            res.status(200).json(response)
        }
    }catch(e) {
        next(e)
    }
}
const deleteUser = async (req,res,next) => {
    try{
        const response = await User.findByIdAndDelete(req.params.id)
        if(!response){
            throw err(404,"Kullanıcı Silinemedi")
        }else {
            res.status(200).json({message:`Silinen kullanıcı ${response.name + " "+response.lastName}`})
        }
    }catch(e) {
        next(e)
    }
}
const hiddenUser = async (req,res,next) => {
    try{
        const response = await User.findByIdAndUpdate(req.params.id,{isActive:req.body.isActive})
        if(!response){
            throw err(404,"Kullanıcı liste dışı bırakılmadı")
        }else {
            res.status(200).json(response)
        }
    }catch(e) {
        next(e)
    }
}
const authUser = async (req,res,next) => {
    try{
        const response = await User.findByIdAndUpdate(req.params.id,{auth:req.body.auth})
        if(!response){
            throw err(404,"Kullanıcı yetkilendirilmedi")
        }else {
            res.status(200).json(response)
        }
    }catch(e) {
        next(e)
    }
}

module.exports = {
    newUser,
    fetchUsers,
    fetchUser,
    updateUser,
    deleteUser,
    hiddenUser,
    authUser
}