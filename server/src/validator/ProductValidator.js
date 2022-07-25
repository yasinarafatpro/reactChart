const Joi =require("joi");

const schema=Joi.object({
    productDetails:Joi.string()
    .alphanum()
    .min(5)
    .max(50)
    .required()
})

const productValidator=async(req,res,next)=>{
   try {
    await schema.validateAsync(req.body);
    return next()
   } catch (error) {
       return next(error.message)
   }
}
module.exports=productValidator