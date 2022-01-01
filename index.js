const express = require('express');
const app =express();
const dotenv=require('dotenv');


const mongoose =require('mongoose');
dotenv.config();

const authRoute=require('./routes/auth');
const postRoute=require('./routes/post');
app.use('/api/user',authRoute);
app.use('/api/post',postRoute);

mongoose.connect(process.env.DB_CONNECT,
{useNewUrlParser:true},
()=>{
    console.log("Yup I am Alive")
})

app.use(express.json);

app.listen(3000,()=>console.log("Yes Really alive"));