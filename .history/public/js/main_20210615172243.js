const chatform= document.getElementById('chat-form');

const socket=io();

socket.on('message', message => {
    console.log(message);
});

//Message Submit
chatform.addEventListener('submit',(e)=>{
    //Prevemts the Text from Entering the File
    e.preventDefault();
    //Takes Input from From after Submit is Pressed and Passes it to Msg Variable
    const msg =e.target.element.msg.value;
    //Emits to Consol Test-1
    console.log(msg);

});