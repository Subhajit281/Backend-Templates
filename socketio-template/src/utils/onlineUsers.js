const onlineUsers = new Map();

const addUser = (userId,socketId) =>{
    onlineUsers.set(userId,socketId);
};

const removeUser = (userId)=>{
    OnlineUsers.delete(userId);
};

const getUserSocket=(userId)=>{
    return onlineUsers.get(userId);
};

const getUserBySocket = (socketId) => {
    for (const [userId, id] of onlineUsers.entries()) {
        if (id === socketId) {
            return userId;
        }
    }
    return null;
};

const getOnlineUsers = () =>{
    return Array.from(onlineUsers.entries());
};


module.exports = {
    addUser,
    removeUser,
    getUserSocket,
    getUserBySocket,
    getOnlineUsers
};