const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for creating note
notes.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to create note`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});

// DELETE route to delete a note
notes.delete('/:id', (req, res) => {
  const noteId = req.params.id;

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  
    const filteredNotes = data.filter((note) => id !== noteId);

    writeToFile('./db/db.json', JSON.stringify(filteredNotes), (error) => {
      if (error) {
        throw error;
      }
      res.json({ message: 'Note deleted successfully' });
    });
  });



module.exports = notes;