const { Module } = require("node:module");

const users=[];

//Join User to Chat

function userJoin(id,username,room){
    const user={id,username,room};

    users.push(user);

    return user;
}

//Get Current User
function getCurrentUser(id){
    return users.find(user.id === id);
}

module.exports ={
    userJoin,
    getCurrentUser
};