const express= require('express');
const cookieParser=require('cookie-parser');
var cors = require('cors');
const productValidator = require('./src/validator/ProductValidator');
const app=express();
app.use(cors())
app.use(express.json())
app.use(cookieParser());

app.get('/hello', (req, res) => {
    res.send({
      data: {
        name: 'first_nodejs',
      },
    });
  });

app.post('/user')

app.post('/post',productValidator, (req, res) => {
    console.log(req.body)
    res.send({
        data:req.body
    })
  });

app.listen(3001,()=>{
    console.log("server listining at port 3001")
})