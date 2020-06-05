require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const roomController = require("./controllers/roomController");
const userController = require("./controllers/userController");
const messageController = require("./controllers/messageController");
const { secret } = require("./config");
const jwt = require("jwt-simple");


const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


//for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
require('./services/passport');

// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chat_db', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

io.on("connection", socket => {
    console.log("New client connected.");
    socket.on("message", data => {
        //data is {formvalues, user, room}
        messageController.createMessage(data, activeRoom => {
            // console.log(activeRoom, "asdasdasdasdasdasdafasfasfas");
            io.to(data.room._id).emit("serverToClientMessage", activeRoom)
        })
    });
    socket.on("createRoom", data => {
        //data is the room name and userID
        // socket.join(data.roomName)
        roomController.createRoom(data, newRoom => {
            io.emit("serverToClientRoom", newRoom);
        });
    })

    socket.on("getAllRooms", () => {
        roomController.getAllRooms(rooms => {
            if (rooms !== "Error") {
                socket.emit("serverToClientRoom", rooms);
            }
        });
    })

    socket.on("deleteRoom", data => {
        //data is { token:"asdasd", payload: "id of room" }
        let decoded = jwt.decode(data.token, secret);
        // decoded = { sub: 'asdada', iat: TimeStamp}
        //decoded.sub is id of user
        roomController.deleteRoomById(data.payload, decoded.sub, rooms => {
            if (rooms !== "Error") {
                io.emit("loadAllRooms", rooms);
            }
        });
    })

  
    
    socket.on("getActiveRoom", data => {
        // const {roomId, user} = data;
        socket.join(data.roomId);
        roomController.getActiveRoom(data, activeRoom => {
            socket.emit("activeRoom", activeRoom);
            socket.broadcast.to(data.roomId).emit("userJoinMessage", {message: `${data.user.firstName}\u00A0${data.user.lastName} has joined the chat`});

        })
    })

    socket.on("leaveRoom", data => {
        // const { room, user} = data;
        socket.leave(data.room._id);
        socket.broadcast.to(data.room._id).emit("userLeftMessage", {message: `${data.user.firstName}\u00A0${data.user.lastName} has left the chat`});
        // roomController.getActiveRoom(data, activeRoom)
        // console.log("left message sent");
    })
    
    socket.emit("disconnect", () => {
        console.log("Client disconnected.");
        return;
    });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
