const { Room, User, Message } = require('../models/index');
const axios = require('axios');
const apiKey = process.env.REACT_APP_API_KEY;

module.exports = {
    createMessage: async (data, cb) => {
        try {
            const newMessage = await new Message({
                text: data.formValues.message,
                userId: data.user._id,
                firstName: data.user.firstName,
                lastName: data.user.lastName
            }).save();
            const currentRoom = await Room.findById(data.room._id);
            currentRoom.messages.push(newMessage._id);
            await currentRoom.save();
            const activeRoom = await Room.findById(data.room._id).populate("messages");
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    },

    translateMessage: async (req, res) => {
        const {message, language} = req.body;
        try {
        const apiRes = await axios.get(`https://translation.googleapis.com/language/translate/v2?target=${language}&q=${message.text}&key=${apiKey}`);
        const translation = apiRes.data.data.translations[0].translatedText;
        const newMessage = message;
        newMessage.text = translation;
        return res.json({newMessage})
            
        } catch (error) {
            throw error;
        }
    },
    deleteMessage: async (data, cb) => {
        try {
            const currentRoom = await Room.findById(data.roomId);
            currentRoom.messages.pull(data.message);
            await currentRoom.save();
            const activeRoom = await Room.findById(data.roomId).populate("messages");
            cb(activeRoom);
        } catch (error) {
            throw error;
        }
    }
}