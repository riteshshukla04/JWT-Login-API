const Joi=require('joi');


const RegisterValidation=data=>{
    const schema=Joi.object(
        {
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required().alphanum()
    });
    return schema.validate(data);

}

const LoginValidation=data=>{
    const schema=Joi.object(
        {
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required().alphanum()
    });
    return schema.validate(data);

}







module.exports.RegisterValidation=RegisterValidation;
module.exports.LoginValidation=LoginValidation;