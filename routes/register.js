const express = require('express');
const User = require('../models/user');
const router = express.Router();
// const 

router.get('/',(req,res)=>{
    res.send("this is register page");
})

router.post('/',(req,res)=>{
    
    const user = new User({
        email:req.body.email,
        password:req.body.password,
        slot:req.body.slot

    })
    user.save();
})

module.exports = router;