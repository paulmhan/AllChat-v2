const { Room, User } = require('../models/index');

module.exports = {
    createRoom: async (data, cb) => {
        const { roomName, userId } = data;
        // console.log(data);
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
            if (userId != roomDelete.creator) {
                cb("Error")
            } else {
                const deletedRoom = await Room.findByIdAndDelete(roomId);
                const rooms = await Room.find().populate("messages");
                if (!rooms) {
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
            if (!rooms) {
                console.log("No Rooms");
                cb("Error")
            }
            cb(rooms);
        } catch (error) {
            throw error;
        }
    },

    getActiveRoom: async (data, cb) => {
        try {
            const activeRoom = await Room.findById(data.roomId).populate("messages");
            activeRoom.users.push(data.user._id);
            await activeRoom.save();
            console.log(activeRoom, "when joining")
            cb(activeRoom)
        } catch (error) {
            throw error
        }
    },

    getActiveRoomAfterDelete: async (data, cb) => {
        try {
            const activeRoom = await Room.findById(data.room._id).populate("messages");
            activeRoom.users.pull(data.user._id);
            await activeRoom.save();
            console.log(activeRoom, "when leaving");
            cb(activeRoom)
        } catch (error) {
            throw error

        }
    }
}