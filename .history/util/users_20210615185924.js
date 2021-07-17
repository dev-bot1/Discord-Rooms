const users=[];

//Join User to Chat

function userJoin(id,username,room){
    const user={id,username,room};

    users.push(user);

    return user;
}