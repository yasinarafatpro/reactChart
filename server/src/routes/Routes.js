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
            madeIn:{street:'Dhaka',city:'tangail'}
            
          })
        const dataToSave =await product.save();
        res.status(200).json(dataToSave)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
})
router.get('/getAll',async(req,res)=>{
    try {
        const data=await ProductSchema.find();
        res.json(data)
    } catch (e) {
        res.status(500).json({message:e.message})
    }
})
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await ProductSchema.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.patch('/update/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedData=req.body;
        const options={new : true};

        const result=await ProductSchema.findByIdAndUpdate(
            id , updatedData ,options
        )
        res.send(result)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await ProductSchema.findByIdAndDelete(id)
        res.send(`Document with ${data.productname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports=router;