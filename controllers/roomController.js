const { Room,User } = require('../models/index');

module.exports = {
    createRoom: async (data, cb) => {
        const { roomName, userId } = data;
        console.log(data);
        try {
            const newRoom = await new Room({ text: roomName })
            newRoom.users.push(userId);
            await newRoom.save();
            cb([newRoom]);
        } catch (error) {
            throw error;
        }
    },
    deleteRoomById: async (roomId, userId) => {
        
    },

    getAllRooms: async (cb) => {
        try {
            const rooms = await Room.find();
            if(!rooms){
                console.log("No Rooms");
            }
            cb(rooms);
        } catch (error) {
            throw error;
        }
    },
    
    
}