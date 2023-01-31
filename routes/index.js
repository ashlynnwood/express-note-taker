const express = require('express');

// Import modular router for /notes 
const notesRouter = require('./tips');

const app = express();

// adding to the front of route
app.use('/notes', notesRouter);

module.exports = app;