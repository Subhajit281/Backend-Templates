
const {
    registerUser,
    sendPrivateMessage,
    sendTypingIndicator,
    handleDisconnect,

    joinRoom,
    leaveRoom,
    sendRoomMessage

} = require('../services/socket.service');


//from service same functions

const registerUserHandler = (socket,data) =>{
   const result = registerUser(data.userId,socket.id);
  //  console.log("Sending register-success");
    socket.emit('register-success',result);
};

const privateMessageHandler = (io,socket,data)=>{
    const result = sendPrivateMessage(io, data.senderId, data.receiverId, data.message);
    socket.emit('message-status',result);
}

const typingIndicatorHandler = (io,data)=>{
    sendTypingIndicator(io, data.senderId, data.receiverId);
}

const disconnectHandler = (socket) => {
    handleDisconnect(socket.id);
};

const joinRoomHandler = (socket, data) => {
    const result = joinRoom( socket, data.roomId);
    socket.emit("room-joined",result);
};

const leaveRoomHandler = ( socket, data) => {
    const result = leaveRoom( socket, data.roomId);
    socket.emit( "room-left", result );
};

const roomMessageHandler = (io, socket, data) => {
    const result = sendRoomMessage(io, data.roomId, data.senderId,  data.message);
    socket.emit( "message-status", result);
};

module.exports = {
    registerUserHandler,
    privateMessageHandler,
    typingIndicatorHandler,
    disconnectHandler,
    joinRoomHandler,
    leaveRoomHandler,
    roomMessageHandler
};

