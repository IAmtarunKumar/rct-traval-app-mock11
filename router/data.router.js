const express = require("express")
const {DataModel} = require("../model/data.model")


const dataRouter = express.Router()


//post data
dataRouter.post("/post" , async(req,res)=>{
    let payload = req.body
    try {
        let data = new DataModel(payload)
        await data.save()
        res.status(200).send({msg : "Data is posted"})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//get data

dataRouter.get("/get" , async(req,res)=>{
    let payload = req.body
    try {
        let data = await DataModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


dataRouter.delete("/delete/:id" , async(req,res)=>{
  let id = req.params.id
    try {
     let data = await DataModel.findByIdAndDelete({_id : id})
     res.status(200).send({msg : "data is deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//filter base on destination
dataRouter.get("/filter/:des" , async(req,res)=>{
   let des = req.params.des
    try {
     let data = await DataModel.find({destination : des})
     res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


//sort by price [low to high]

dataRouter.get("/lth" , async(req,res)=>{
    
     try {
      
      let data = await DataModel.find().sort({budgetPerPerson : 1 })
      res.status(200).send(data)
      
     } catch (error) {
         console.log(error)
         res.status(400).send(error)
     }
 })

 //sort by price [high to low]

dataRouter.get("/htl" , async(req,res)=>{
    
     try {
      
      let data = await DataModel.find().sort({budgetPerPerson : -1 })
      res.status(200).send(data)
       
     } catch (error) {
         console.log(error)
         res.status(400).send(error)
     }
 })




module.exports={
    dataRouter
}