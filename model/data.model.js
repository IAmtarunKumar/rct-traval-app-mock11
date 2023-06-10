const mongoose = require("mongoose")

//schema 

const dataSchma = mongoose.Schema({
    name : String,
    email : String,
    destination : String,
    numOfTravellers : String,
    budgetPerPerson : String

})


//model

const DataModel =  mongoose.model("data" , dataSchma)

module.exports={
    DataModel
}