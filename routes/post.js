const router=require('express').Router();
const User=require('../model/User');
var bodyParser = require('body-parser');
const bycrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
var jsonParser = bodyParser.json()
let verify =require('./verifyToken')

router.get('/',verify,(req,res)=>{
    res.json({
        posts:{
            title:"Check",
            des:"Dont see",
        },
        user:{
            user:req.user
        }
    })
})
module.exports=router;
