const { Room,User } = require('../models/index');

module.exports = {
    createRoom: async (data, cb) => {
        const { roomName, userId } = data;
        console.log(data);
        try {
            const newRoom = await new Room({ text: roomName, creator: userId }).save();
            // newRoom.users.push(userId);
            // await newRoom.save();
            // const room = await Room.findById(newRoom._id).populate("messages");
            cb([newRoom]);
        } catch (error) {
            throw error;
        }
    },
    deleteRoomById: async (roomId, userId, cb) => {
        try {
            const roomDelete = await Room.findById(roomId);
            if(userId != roomDelete.creator){
                console.log("Cannot delete a room that is not yours.");
                cb("Error")
            } else {
                const deletedRoom = await Room.findByIdAndDelete(roomId);
                const rooms = await Room.find().populate("messages");
                if(!rooms){
                    console.log("No Rooms");
                    cb("Error");
                }
                cb(rooms);
            }
        } catch (error) {
            throw error;
        }
    },

    getAllRooms: async (cb) => {
        try {
            const rooms = await Room.find().populate("messages");
            if(!rooms){
                console.log("No Rooms");
                cb("Error")
            }
            cb(rooms);
        } catch (error) {
            throw error;
        }
    },

    getCurrentRoom: async (room, cb) => {
        try {
            const currentRoom = await Room.findById(room._id).populate("messages");
            cb(currentRoom)
        } catch (error) {
            throw error
        }
    }
    
    
}