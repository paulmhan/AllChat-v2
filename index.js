require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");


const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
require('./services/passport');

// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chat_db', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

// io.on("connection", socket => {
//     console.log("New client connected.");
//     socket.on("createRoom",  )
// })

app.listen(PORT);
