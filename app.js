// new notes get stored in the json db as an object (title, text, id)

// the json is what's showing up under "note taker" col on left

// need routes that will remove from file (delete note)

// taking things, moving it, renaming it

// Require Express library
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if route includes '/api', going to send over to the api folder
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// wildcard returns homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);