// Establish MongoDB connection
// Close connection
// Handles database connection lifecycle


const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully on port ${connect.connection.host}`);
    }catch(error){
        console.log(`DataBase Connection error, ${error.message}`);
        process.exit(1);
    }
}

const closeDB = async()=>{
    try{
        await mongoose.connection.close();
        console.log(`MongoDB closed successfully via app termination`);
        process.exit(0);
    }catch(error){
        console.log(`MongoDB couldn't be closed cleanly, ${error.message}`);
        process.exit(1);
    }
}

process.on('SIGINT',closeDB);
process.on('SIGTERM',closeDB);

module.exports = connectDB;