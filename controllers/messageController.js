const { Room,User,Message } = require('../models/index');

module.exports = {
    createMessage: async (data, cb) => {
        
        const { firstName, lastName, message, userId } = data;
        console.log(data, "messagecontroller log");
        try {
            const messageData = await new Message({ text: message, user:userId, firstName:firstName, lastName:lastName }).save();
            const newMessage = await Message.findById(messageData._id);
            console.log(newMessage);
            cb(newMessage);
        } catch (error) {
            throw error;
        }
    },
    getRoomById: async () => {

    },
    getAllRooms: async () => {

    },
    
    
}