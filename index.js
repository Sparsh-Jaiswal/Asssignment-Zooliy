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
    //console.log("level1");
    try{
        console.log(req.body);
        var ass=new Asset({
            Info: req.body.Info ,
            Reciever: req.body.Reciever,
            Sender: req.body.Sender ,
            timestamp: new Date()});
        var doc=await ass.save();
        res.send(doc);
    }
    catch(e){
        console.log(e);
        res.status(400).send();
    }
});

app.get('/transfers',async(req,res) => {
    try{
        res.send("Hello World1");
    }
    catch(e){
        res.status(400).send();
    }
});

app.put('/transfers',async(req,res)=> {
    try{
        res.send("Put Operation Currently not Available on Transfers");
    }
    catch(e){
        res.status(400).send();
    }
});

app.delete('/transfers',async(req,res)=> {
    try{
        res.send("Delete Operation Currently not Available on Transfers");
    }
    catch(e){
        res.status(400).send();
    }
});

app.listen(port,()=>console.log(`Server Running on port ${port}!`));
