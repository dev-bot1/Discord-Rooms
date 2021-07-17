const chatform= document.getElementById('chat-form');
const chatMessage=document.querySelector('.chat-messages');


//Get User Name and Room From URl
const {username,room}=Qs.parse(location.search,{
    //Used to Remove Parenthesis from the  URL
    ignoreQueryPrefix: true
});

// console.log(username,room);

const socket=io();

//Join Chat room
socket.emit('joinRoom',{username,room});


//Message From Server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    //Scrool down
    //Automatically down
    chatMessage.scrollTop =chatMessage.scrollHeight;
});

//Message Submit
chatform.addEventListener('submit', (e) => {
    //Prevemts the Text from Entering the File
    e.preventDefault();
    //Takes Input from From after Submit is Pressed and Passes it to Msg Variable
    const msg =e.target.elements.msg.value;
    //Emits to Consol Test-1
    // console.log(msg);

    //Emit Msg to Server
    socket.emit('chatMessage',msg);

    //Clear Input
    e.target.elements.msg.value='';
    e.target.elements.msg.focus();

});

//Output Message to Dom
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = 
    `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}