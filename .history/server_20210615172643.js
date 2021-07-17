const path= require('path');
const http = require('http');
const express=require('express');
const socketio = require('socket.io');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
//Run when Client Connects
io.on('connection',socket =>{
    //Test Coomand
    // console.log("New WS Connection....");
    
    //Welcomes a User Inside the Chatroom
    //Single Client Connection
    socket.emit('message','Welcone to Discord Rooms');

    //Brodcast when user connect except the user connected
    socket.broadcast.emit('message','A User has Joined the Chat Room');

    //Runs when client disconnect
    socket.on('disconnect', ()=>{
        io.emit('message','A User has Left the Chat');
    });
   
    //Everyone in Room
    // io.emit()

    //Listen for Chat Msg Events
    socket.on('chatMessage',()=>{
        console.log(msg);

    });
});

const PORT=3000|| process.env.PORT;

server.listen(PORT, () => console.log("Server Running on Port 3000"));