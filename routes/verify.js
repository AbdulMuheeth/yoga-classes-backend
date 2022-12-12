const express = require('express');
const User = require('../models/user');
const router = express.Router();
// const 

router.get('/',(req,res)=>{
    
})

router.post('/',(req,res)=>{
    console.log("verify");
    console.log(req.body.id);
    // console.log(req.body.name);
    // console.log(req.body.email);console.log(req.body.password);
    User.findOne({_id:req.body.id},(err,docs)=>{
        if(err)
            console.log(err)
        console.log(docs);
        if(docs)
            res.send(docs).status(200);
        else
            res.send(false).status(404);
    })
})

router.post("/completePayment",(req,res)=>{
    console.log(req.body.id,req.body.date);
    // console.log(new Date(req.body.date));
    User.findByIdAndUpdate(req.body.id,{lastPaymentDate:req.body.date},(err,docs)=>{
        if(err)
            res.send("Some error has occurred").status(404);
        res.send("Update successfull").status(200);
    })
})


router.post("/updateSlot",(req,res)=>{

    const slot = req.body.slot;
    User.findByIdAndUpdate(req.body.id,{nextMonthSlot:slot},(err,docs)=>{
        if(err)
            res.send("some error has occurred").status(404);
        res.send(true).status(200);
        
    })

})

router.post("/changeCurrentSlot",(req,res)=>{

    const slot = req.body.slot;
    User.findByIdAndUpdate(req.body.id,{slot:slot,nextMonthSlot:""},(err,docs)=>{
        if(err)
            res.send("some error has occurred").status(404);
        res.send(true).status(200);
        
    })

})

// changeCurrentSlot

module.exports = router;