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
        console.log(data, "DATA");
        messageController.createMessage(data, activeRoom => {
            console.log(activeRoom, "asdasdasdasdasdasdafasfasfas");
            io.to(data.room._id).emit("serverToClientMessage", activeRoom)
        })
    });
    socket.on("createRoom", data => {
        console.log("CREATING ROOM");
        //data is the room name and userID
        // socket.join(data.roomName)
        roomController.createRoom(data, newRoom => {
            io.emit("serverToClientRoom", newRoom);
        });
    })

    socket.on("getAllRooms", () => {
        console.log("GETTING ROOM");
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

    socket.on("joinRoom", data => {
        socket.join(data.room._id);
        // socket.emit("WelcomeMessage", {
        //     firstName: "AllChatBot",
        //     lastName: "",
        //     text: "Welcome to AllChat!",
        //     userId: "12345678"
        // });
        // socket.broadcast.emit("userJoinMessage", {
        //     firstName: "AllChatBot",
        //     lastName: "",
        //     text: `${data.user.firstName}\u00A0${data.user.lastName} joined the chat`,
        //     userId: "123456789"
        // });
    })
    
    socket.on("getActiveRoom", roomId => {
        roomController.getCurrentRoom(roomId, currentRoom => {
            socket.emit("activeRoom", currentRoom);
        })
    })


    // socket.on("getRoomUsers", data => {
    //     console.log("Getting users from room");
    //     userController.getRoomUsers(data, roomUsers => {
    //         socket.emit("getRoomUsers", roomUsers);
    //     });
    // });

    // socket.on("createRoom",  )
    socket.emit("disconnect", () => {
        console.log("Client disconnected.");
        return;
    });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
