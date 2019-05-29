const express=require('express');
const bodyparser=require('body-parser');
const morgan=require('morgan');

const app=express();
const port=3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send('Hello World!');
});
app.listen(port,()=>console.log(`Server Running on port ${port}!`));
