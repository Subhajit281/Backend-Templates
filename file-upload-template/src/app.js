const express = require('express');
const cors = require('cors');

const uploadRoutes = require('./routes/upload.route');
const errorHandler = require('./middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    '/uploads',
    express.static('src/uploads')
);

app.use('/api/upload', uploadRoutes);




app.use(errorHandler);
module.exports = app;