// Express Initialisation
// Global Middlewares
//Route Registration

// ... No Database connection ... No listening here


const express = require('express');
const cors = require('cors');

const healthRoute = require('./routes/health.route');
const noteRoute = require('./routes/note.route');
const errorHandler = require('./middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health',healthRoute);      
app.use('/api/note',noteRoute);

app.use(errorHandler);

module.exports = app;

