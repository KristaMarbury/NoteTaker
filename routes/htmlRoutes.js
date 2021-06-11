const path = require("path");
const router = require("express").Router();

//html routes are only going to be router.gets

//get for the index.html 
 router.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 });

 //get for the note.html
 router.get("/notes", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/notes.html"));
 });

//stays at the bottom
module.exports = router;

