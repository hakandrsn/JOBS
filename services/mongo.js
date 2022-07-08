const {connect:connect1} = require("mongoose");
   connect1(process.env.MONGO_URL).then(()=>console.log(("bağlandık"))).catch((err)=>console.log(err))

