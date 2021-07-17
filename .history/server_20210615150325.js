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
    console.log("New WS Connection....");
    socket.emit('message','Welcone to Discord Rooms');
});

const PORT=3000|| process.env.PORT;

server.listen(PORT, () => console.log("Server Running on Port 3000"));