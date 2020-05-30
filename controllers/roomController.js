const { Room,User } = require('../models/index');

module.exports = {
    createRoom: async (data, cb) => {
        const { roomName, userId } = data;
        console.log(data);
        try {
            const newRoom = await new Room({ text: roomName })
            newRoom.users.push(userId);
            await newRoom.save();
            cb(newRoom);
        } catch (error) {
            throw error;
        }
    },
    getRoomById: async () => {

    },
    getAllRooms: async () => {

    },
    
    
}