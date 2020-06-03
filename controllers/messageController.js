const { Room, User, Message } = require('../models/index');

module.exports = {
    createMessage: async (data, cb) => {
        //
        const { formValues, user, room } = data;
        // console.log(data, "messagecontroller log");
        try {
            const newMessage = await new Message({
                text: formValues.message,
                user: user._id,
                firstName: user.firstName,
                lastName: user.lastName
            }).save();
            // const newMessage = await Room.findById(messageData._id);

            const currentRoom = await Room.findById(room._id);
            currentRoom.messages.push(newMessage._id);
            await currentRoom.save();
            const activeRoom = await Room.findById(room._id).populate("messages");
            // consone.log(newMessage, "message from messagecontroller");
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    },
    getRoomById: async () => {

    },
    getAllRooms: async () => {

    },


}