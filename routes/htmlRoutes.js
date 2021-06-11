const path = require("path");
const router = require("express").Router();

//html routes are only going to be router.gets

//get for the index.html 
router.get()

//get for the note.html
router.get()


//stays at the bottom
module.exports = router;

//maybe will need this 
// Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "notes.html"));
// });

// //get our entire database
// app.get("/api/notes", (req, res) => {
//   return res.json(note);
// });

// //gets a specific character from the database
// app.get("/api/notes/:thatone", (req, res) => {
//   const chosen = req.params.note;
//   const chosenNote =
//     note.find((thatone) => thatone.routeName == chosen) || false;
//   return res.json(chosenNote);
// });

// //create a new character
// app.post("/api/newnote", (req, res) => {
//   const newThought = req.body;
//   newThought.routeName = newThought.name.replace(/\s+/g, "").toLowerCase();
//   note.push(newThought);
//   res.json(newThought);
// });