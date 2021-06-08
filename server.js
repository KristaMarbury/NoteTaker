const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const note = [
  {
    title: "Test Title",
    text: "Test text",
  },
];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/note", (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

//get our entire database
app.get('/api/noted', (req, res) => {
  return res.json(note);
});

//gets a specific character from the database
app.get('/api/noted/:thatone', (req, res) => {
  const chosen = req.params.note;
  const chosenNote = note.find(character => character.routeName == chosen) || false;
  return res.json(chosenNote);
});

//create a new character
app.post('/api/newnote', (req, res) => {
  const newThought = req.body;
  newThought.routeName = newThought.name.replace(/\s+/g, "").toLowerCase();
  note.push(newThought);
  res.json(newThought);
});

//start the server
app.listen(PORT, () => console.log(`App is listening on PORT ${PORT}`));