const error =(err,req,res,next)=>{


    if(err.name){
        switch (err.name) {
            case "NotFoundError":
                return res.status(400).json({message:err.message})
            case "MongoServerError":
                return res.status(500).json({message:err.message})
            case "ValidationError":
                return res.status(400).json({message:"Yazım hatası bulundu"})
            case "ReferenceError":
                return res.status(400).json({message:err.message})
            case "LengthRequiredError":
                return res.status(400).json({message:err.message})
            default:
                return next()
        }
    }
    if(err.code){
        switch (err.code) {
            case 11000:
                return res.status(400).json({message:`Bu ${Object.keys(err.keyValue)} zaten var`})
            default:
                return next();
        }
    }

}

module.exports=error