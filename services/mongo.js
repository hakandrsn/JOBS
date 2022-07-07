const con = require("mongoose");

con.connect(process.env.MONGO_URL).then(()=>{
    console.log("connted to mongo")
})
