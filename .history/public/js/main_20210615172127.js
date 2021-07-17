const chatform= document.getElementById('chat-form');

const socket=io();

socket.on('message', message => {
    console.log(message);
});

//Message Submit
chatform.addEventListener('submit',(e)=>{
    //Prevemts the Text from Entering the File
    e.preventDefault();

    const msg =e.target.element.msg.value;

    console.log(msg);

});