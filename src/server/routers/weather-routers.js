const weatherModel = require("../../db/model/weather-model")
const express = require("express");
const aggregation = require("../utils")
const router = new express.Router()

router.post("/save",async(req,res)=>{
    const data = new weatherModel(req.body);
    try{
        await data.save();
        const result = await weatherModel.find({});
        res.status(200).send({result,'aggregatedData':aggregation(result)});
    }
    catch(e){
        res.status(400).send(e);
    }
});

router.get("/getData", async(req,res)=>{
    try{
        const result = await weatherModel.find({});
        res.status(200).send({result,'aggregatedData':aggregation(result)});
    }
    catch(e){
        res.status(400).send(e);
    }
});

router.delete("/deleteRecord/:id", async(req,res)=>{
    try{
        const deletedRecord = await weatherModel.findByIdAndDelete(req.params.id);
        const result = await weatherModel.find({});
        res.status(200).send({result,'aggregatedData':aggregation(result)});
    }
    catch(e){
        res.status(400).send(e);
    }
})


module.exports = router