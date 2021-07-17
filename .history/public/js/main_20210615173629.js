const chatform= document.getElementById('chat-form');

const socket=io();
//Message From Server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);
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

});

//Output Message to Dom
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = 
    `<p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
        ${message}
    </p>`;
    document.querySelector('.chat-message').appendChild(div);
}