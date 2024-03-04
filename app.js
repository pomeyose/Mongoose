const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const router = require('./Routes/routes');
const app=express();


app.use(express.json());
app.use(bodyParser.json());
app.use('/',router);
mongoose.connect('mongodb://localhost:27017/zomato',{
    useNewUrlParser : true ,useUnifiedTopology : true
}).then(()=>{
    app.listen(5000,()=>{
        console.log ('server running  in port 5000')
     });
    console.log('connected to mongoDB')
}).catch((error)=>{
    console.log(error)
})
