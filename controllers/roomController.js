const { Room,User } = require('../models/index');

module.exports = {
    createRoom: async (roomName) => {
        if(!roomName){
            // return res.status(400).json({ error:"You must provide a room name." });
        }
        try {
            const newRoom = await new Room({ text: roomName, })
        } catch (error) {
            
        }
    },
    getRoomById: async () => {

    },
    getAllRooms: async () => {

    },
    
    
}