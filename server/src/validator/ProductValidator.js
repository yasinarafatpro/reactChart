const Joi =require("joi");

const schema=Joi.object({
    productname:Joi.string()
    .alphanum()
    .min(5)
    .max(50)
    .required(),

    brand:Joi.string()
    .alphanum()
    .max(50)
    .required(),
    
    ram:Joi.number()
    .required(),

    tags:Joi.string()
    .required(),

    price:Joi.number()
    .required()
})

const productValidator=async(req,res,next)=>{
   try {
    await schema.validateAsync(req.body);
    console.log('successfully validated')
    return next();
   } catch (error) {
    console.log(error)
       return next(error.message);
   }
}
module.exports=productValidator;