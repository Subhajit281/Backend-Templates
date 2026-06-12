const express = require('express');
const errorMiddleware = require('./middleware/error.middleware');
const authRoute = require('./routes/auth.route');

const app = express();
app.use(express.json());

// TEST ROUTE
// Used only for validating Joi schemas and middleware flow.
// Not connected to authentication logic.
app.use('/api/auth',authRoute);


app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'Validation template is running'
    });
});



app.use(errorMiddleware);
module.exports = app;