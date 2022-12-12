const express = require('express');
const User = require('../models/user');
const router = express.Router();
// const 

router.get('/',(req,res)=>{
    res.send("this is login page");
})

router.post('/',(req,res)=>{
    // console.log(req.body.name);
    console.log(req.body.email);console.log(req.body.password);
    User.findOne({name:req.body.name,age:req.body.age,email:req.body.email,password:req.body.password},(err,docs)=>{
        if(err)
            console.log(err)
        if(docs)
            res.send({userexists:true,id:docs._id}).status(200);
        else
            res.send({userexists:false,id:""}).status(404);
    })
})
module.exports = router;