const express = require("express")
require("dotenv").config()

const cors = require("cors")

const {connection} = require("./config/db")
const {dataRouter} = require("./router/data.router")

const app = express()

app.use(express.json())
app.use(cors())

//data router
app.use("/",dataRouter)


app.get("/",(req,res)=>{
    res.send("Welcome")
})


app.listen(process.env.port || 5000 , async()=>{
    try {
        await connection
        console.log("Database is connected")
    } catch (error) {
        console.log(error)
    }

    console.log(`${process.env.port} is connected`)

})


