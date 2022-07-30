const express=require('express');
const ProductSchema = require('../schema/ProductSchema');
const router=express.Router();

router.post('/post',async(req,res)=>{
    try {
        const product=new ProductSchema({
            productname:req.body.productname,
            brand:req.body.brand,
            ram:req.body.ram,
            tags:req.body.tags,
            price:req.body.price,
            feachers:['camera','AI'],
            madeIn:{street:'Dhaka',city:'tangail'},
            email:req.body.email,
            
          })
        const dataToSave =await product.save();
        res.status(200).json(dataToSave)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
})

module.exports=router;