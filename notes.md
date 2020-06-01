mapStateToProps(state){
    //we want to make a prop called authenticated, that goes into the reducer auth, and returns the default state of authenticated or depending on the type
    return { authenticated: state.auth.authenticated}
}

order: component => calls actions => to reducer => changes state in store => reducer => action => component

a higher order component is taking a component, and returning a new component
connect(mapStateToProps,{})(Chat); takes the chat component, and returns it altered with the new state

1) When a user signs up, they are sent to the room select page; at this point, there is no socket initialized
2) user has two options: 
    A) join an existing room
        a) if the user wants to join a room, we have access to current user at this point.
        b) we want to push them into that room name with socket.join("roomName")
        c) this is the only time we want to use socket join, when a user presses create join room
    B) create a room
        a) this funcitonality is done
        b) room is created to db and added to store, then appended to list of rooms for user to select


When the user joins the room, we want to add that room into the user schema
    - and delete it when they leave
And from the schema, join the room with user.room

socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });