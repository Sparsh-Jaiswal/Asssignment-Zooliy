const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');

var {Asset} = require('./models/Asset');

const url = 'mongodb://localhost:27017';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
    }, (err) => { console.log(err); });

const app=express();
const port=3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/transfers',async(req,res) => {
    try{
        /*var ass=new Asset(req.body);
        await ass.save();*/
        res.send("Hello World2");
    }
    catch(e){
        res.status(400).send();
    }
    //res.send("Hello World");
});

app.get('/transfers',async(req,res) => {
    try{
        res.send("Hello World1");
    }
    catch(e){
        res.status(400).send();
    }
    //res.send('Hello World!');
});

app.listen(port,()=>console.log(`Server Running on port ${port}!`));
