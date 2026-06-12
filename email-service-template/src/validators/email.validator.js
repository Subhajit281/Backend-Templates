const joi = require('joi');

const sendEmailSchema = joi.object({
    to:joi.string().email().required(),
    subject:joi.string().required(),
    text:joi.string(),
    html:joi.string()
}).or('text' , 'html');

module.exports ={ 
    sendEmailSchema
}; 

