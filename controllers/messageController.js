const { Room, User, Message } = require('../models/index');

module.exports = {
    createMessage: async (data, cb) => {
        //
        // const { formValues, user, room } = data;
        // console.log(data, "messagecontroller log");
        try {
            const newMessage = await new Message({
                text: data.formValues.message,
                user: data.user._id,
                firstName: data.user.firstName,
                lastName: data.user.lastName
            }).save();
            // const newMessage = await Room.findById(messageData._id);

            const currentRoom = await Room.findById(data.room._id);
            currentRoom.messages.push(newMessage._id);
            await currentRoom.save();
            const activeRoom = await Room.findById(data.room._id).populate("messages");
            // consone.log(newMessage, "message from messagecontroller");
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    },
    deleteMessage: async (data, cb) => {
        try {
            // console.log(data, "++++++++++++++");
            const currentRoom = await Room.findById(data.roomId);
            currentRoom.messages.pull(data.message);
            await currentRoom.save();
            const activeRoom = await Room.findById(data.roomId).populate("messages");
            // console.log(activeRoom);
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    }


}