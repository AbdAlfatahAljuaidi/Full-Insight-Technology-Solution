// models/Message.js
const mongoose = require('mongoose');
const Joi = require('joi')

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
  
  },
  lastName: {
    type: String,
   
  },
  phone: {
    type: String,
  
  },
  email: {
    type: String,
  
  },
  message: {
    type: String,
  
  },
});

const Message = mongoose.model('Message', messageSchema);

function MessageValidation(object) {
    const schema = Joi.object({
        firstName: Joi.string().min(3).max(30).required(),
        lastName: Joi.string().min(3).max(30).required(),
        phone: Joi.string(),
        email: Joi.string().email().min(3).max(40).required(),
        message: Joi.string().min(3).required(),
    });

    return schema.validate(object);
}

module.exports = {Message,MessageValidation};
