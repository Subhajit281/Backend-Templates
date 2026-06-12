// Load environment Variable
// Connect to database
// Start the server

require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5000;

const startServer = async() =>{
    try{
        await connectDB();

        app.listen(PORT,()=>{
            console.log(`Server running on PORT ${PORT}`);
        });
    }catch(error){
        console.log(`Failed to start server : ${error.message}`);
        process.exit(1);
    }
};

startServer();