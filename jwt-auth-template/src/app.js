const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.route');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);



app.use(errorMiddleware);
module.exports = app;