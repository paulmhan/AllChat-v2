const { Room,User,Message } = require('../models/index');

module.exports = {
    createMessage: async (data, cb) => {
        
        const { message, userId } = data;
        console.log(data);
        try {
            const messageData = await new Message({ text: message, user:userId }).save();
            const newMessage = await Message.findById(messageData._id).populate("user")
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