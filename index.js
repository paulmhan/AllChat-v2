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
        messageController.createMessage(data, newMessage =>{
            socket.emit("serverToClientMessage", newMessage)
            socket.broadcast.emit("serverToClientMessage", newMessage);
        })
    });

    socket.on("createRoom", data => {
        console.log("creating room in server");
        //data is the room name and userID
        // socket.join(data.roomName)
        roomController.createRoom(data, newRoom => {
            socket.emit("serverToClientRoom", newRoom);
        });
    })

    socket.on("userJoinMessage", newUser => {
        socket.broadcast.emit("userJoined", newUser)
    })

    socket.on("getAllRooms", () => {
        console.log("getting rooms in server");
        roomController.getAllRooms(rooms => {
            socket.emit("serverToClientRoom", rooms);
        });
    })

    socket.on("deleteRoom", data => {
        //data is { token:"asdasd", payload: "id of room" }
        let decoded = jwt.decode(data.token, secret);
        // decoded = { sub: 'asdada', iat: TimeStamp}
        //decoded.sub is id of user
        roomController.deleteRoomById(data.payload, decoded.sub);
        

    })

    socket.on("joinRoom", roomName => {
        console.log(roomName);
        socket.join(roomName);
        
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
