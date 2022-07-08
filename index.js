const express = require("express");
const helmet = require("helmet");
const app = express()
const routes = require("./routes")
const cors = require("cors")
require("dotenv").config()
require("./services/mongo")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(helmet())

app.use("/user",routes.user)
app.use("/task",routes.task)
app.use("/work",routes.work)


app.get("/",(req,res)=>{
    console.log("nabersibn")
    res.send("oldu")
})
app.use(require("./middlewares/ErrorMw"))
app.listen(process.env.PORT || 3000 , ()=>{
    console.log(process.env.PORT)
})