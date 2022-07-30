const express= require('express');
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser');
var cors = require('cors');
const productValidator = require('./src/validator/ProductValidator');
const ProductSchema = require('./src/schema/ProductSchema');
const app=express();
app.use(cors())
app.use(express.json())
app.use(cookieParser());
const routes=require('./src/routes/Routes')


app.use('/api',routes)

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
    console.log('server running at port 3001')
  })
mongoose.connect("mongodb://localhost/testdb",()=>{
  console.log('connected with mongoose')
})
