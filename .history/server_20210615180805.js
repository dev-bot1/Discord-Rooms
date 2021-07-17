const path= require('path');
const http = require('http');
const express=require('express');
const socketio = require('socket.io');
const formatMessage=require('./util/messages');

const app=express();
const server=http.createServer(app);
const io=socketio(server);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
//Run when Client Connects

const botName='ChatBot';

//Running the Server Side Chat rooms
io.on('connection',socket =>{
    //Test Coomand
    // console.log("New WS Connection....");
    
    //Welcomes a User Inside the Chatroom
    //Single Client Connection
    socket.emit('message',formatMessage(botName,'Welcone to Discord Rooms'));

    //Brodcast when user connect except the user connected
    socket.broadcast.emit('message',formatMessage(botName,'A User has Joined the Chat Room'));

    //Runs when client disconnect
    socket.on('disconnect', ()=>{
        io.emit('message',formatMessage(botName,'A User has Left the Chat'));
    });
   
    //Everyone in Room
    // io.emit()

    //Listen for Chat Msg Events
    socket.on('chatMessage',msg =>{
        // console.log(msg);
        io.emit('message',formatMessage('USER',msg));

    });
});

const PORT=3000|| process.env.PORT;

server.listen(PORT, () => console.log("Server Running on Port 3000"));