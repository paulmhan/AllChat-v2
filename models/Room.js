const { Schema, model } = require('mongoose');

const RoomSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    users: [{
        type: Schema.Types.String,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message",
    }],
});

const Room = model('Room', RoomSchema);

module.exports = Room;