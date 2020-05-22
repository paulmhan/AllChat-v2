const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
});

const Message = model('Message', MessageSchema);

module.exports = Message;