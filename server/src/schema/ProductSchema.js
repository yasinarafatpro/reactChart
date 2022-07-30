const mongoose=require('mongoose')

const Product=mongoose.Schema({
    productname:{
      type:String,
      required:true
    },
    brand:String,
    ram:Number,
    tags:Number,
    price:Number,
    createdAt:{
      type:Date,
      immutable:true,
      default:()=>Date.now()
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now()
    },
    sameFeatcher:mongoose.SchemaTypes.ObjectId,
    feachers:[String],
    madeIn:{street:String,city:String},
    email:{
        type : String,
        required : true,
        lowercase:true
      }
})
module.exports=mongoose.model("Product",Product)