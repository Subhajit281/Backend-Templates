
const { addUser,removeUser,getUserSocket,getUserBySocket } = require('../utils/onlineUsers');

//register User
const registerUser = (userId,socketId) =>{
    addUser(userId , socketId);

    // to test mapping
    console.log(`Registered ${userId} -> ${socketId}`); 

    return{
        success:true,
        message:'User Registered'
    };
};

//send private messages
const sendPrivateMessage = (io,senderId,receiverId,message) => {
    const receiverSocketId = getUserSocket(receiverId);
    console.log("Receiver ID:", receiverId);
    console.log("Receiver Socket:", receiverSocketId);
    //error handling
    if(!receiverSocketId){
        return{
            success: false,
            message : 'User offline'
        };
    }
    io.to(receiverSocketId).emit('private-message',{ senderId, message });
    return{
        success: true,
        message: 'Message sent'
    };
};

// send typing indicator (eg- Rahul is typing...)
const sendTypingIndicator = (io,senderId,receiverId) =>{
    const receiverSocketId = getUserSocket(receiverId);
    //error handling
    if(!receiverSocketId){
        return;
    }
    io.to(receiverSocketId).emit('typing',{senderId});
};

//handle disconnect
const handleDisconnect = (socketId) => {
    const userId = getUserBySocket(socketId);

    if(!userId) return;

    removeUser(userId);
}

// Rooms
const joinRoom = (socket, roomId) => {
    socket.join(roomId);

    return {
        success: true,
        message: `Joined room ${roomId}`
    };

};

const leaveRoom = (socket, roomId) => {
    socket.leave(roomId);

    return {
        success: true,
        message: `Left room ${roomId}`
    };

};

const sendRoomMessage = (io, roomId, senderId, message) => {
    io.to(roomId).emit("room-message",{ senderId, roomId, message } );

    return {
        success: true,
        message: "Room message sent"
    };

};

module.exports = {
    registerUser,
    sendPrivateMessage,
    sendTypingIndicator,
    handleDisconnect,
    joinRoom,
    leaveRoom,
    sendRoomMessage
};