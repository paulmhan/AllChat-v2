const { Schema, model } = require('mongoose');
const moment = require('moment');

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: moment().format()
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'UserId' 
  },
  firstName: { 
    type: String, 
    ref: 'firstName' 
  },
  lastName: { 
    type: String, 
    ref: 'lastName' 
  },
});

const Message = model('Message', MessageSchema);

module.exports = Message;