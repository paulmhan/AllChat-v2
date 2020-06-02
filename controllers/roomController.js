const { Room,User } = require('../models/index');

module.exports = {
    createRoom: async (data, cb) => {
        const { roomName, userId } = data;
        console.log(data);
        try {
            const newRoom = await new Room({ text: roomName, creator: userId })
            newRoom.users.push(userId);
            await newRoom.save();
            cb([newRoom]);
        } catch (error) {
            throw error;
        }
    },
    deleteRoomById: async (roomId, userId) => {
        try {
            const roomDelete = await Room.findById(roomId);
            console.log(typeof roomId);
            console.log(typeof userId);
            if(userId !== roomDelete.creator){
                console.log("Cannot delete a room that is not yours.");
            }
            const deletedRoom = await Room.findByIdAndDelete(roomId);
        } catch (error) {
            throw error;
        }
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