const express = require('express');
const emailRoutes = require('./routes/email.route');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(express.json());

app.get('/health',(req,res)=>{
    res.status(200).json({
        success: true,
        message:'API is healthy',
        timestamp: new Date().toISOString()
    });
});
app.use('/api/email',emailRoutes);  


app.use(errorMiddleware);
module.exports = app;