const app = require('./src/app');
const http = require('http');
const initializeSocket = require('./src/config/socket.config');
const setupSocket = require("./src/sockets/socket");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = initializeSocket(server);
setupSocket(io);


server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});

