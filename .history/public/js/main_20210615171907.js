const chatform= document.getElementById('chat-form');





const socket=io();

socket.on('message', message => {
    console.log(message);
});