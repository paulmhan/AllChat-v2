const { Room,User,Message } = require('../models/index');

module.exports = {
    createMessage: async (data, cb) => {
        
        const { firstName, lastName, message, userId } = data;
        console.log(data, "messagecontroller log");
        try {
            const newMessage = await new Message({ text: message, user:userId, firstName:firstName, lastName:lastName }).save();
            // const newMessage = await Room.findById(messageData._id);

            const room = await Room.findById(data.room._id);
            console.log(room);
            room.messages.push(newMessage._id);
            await room.save();
            const room2 = await Room.findById(data.room._id).populate("messages");
            // console.log(newMessage, "message from messagecontroller");
            cb(room2);
        } catch (error) {
            throw error;
        }
    },
    getRoomById: async () => {

    },
    getAllRooms: async () => {

    },
    
    
}