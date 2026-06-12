
const { registerUserHandler,
        privateMessageHandler,
        typingIndicatorHandler,
        disconnectHandler,
        joinRoomHandler,
        leaveRoomHandler,
        roomMessageHandler
} = require('../handlers/chat.handler');

const setupSocket = (io) => {
    io.on('connection', (socket) => {
        console.log( `User Connected: ${socket.id}`);

        socket.on('register-user',(data)=>{
            registerUserHandler(socket,data);
        });
        socket.on('private-message',(data)=>{
            privateMessageHandler(io,socket,data);
        });
        socket.on('typing',(data)=>{
            typingIndicatorHandler(io,data);
        });
        socket.on('disconnect',()=>{
            disconnectHandler(socket);
            console.log(`User Disconnected : ${socket.id}`)
        });
        socket.on("join-room",(data) => 
            joinRoomHandler(socket,data)
        );

        socket.on("leave-room",(data) => 
            leaveRoomHandler(socket,data)
        );

        socket.on("room-message",(data) => 
            roomMessageHandler(io,socket,data)
        );
    });
};

module.exports = setupSocket;

