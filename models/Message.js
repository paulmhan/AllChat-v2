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
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
});

const Message = model('Message', MessageSchema);

module.exports = Message;