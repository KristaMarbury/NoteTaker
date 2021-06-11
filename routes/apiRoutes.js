const router = require("express").Router();
const store = require("../db/store.js");
const notesData = require("../routes/htmlRoutes");

//call class store in here 
module.exports = (app) => {
  app.get("/notes", (req, res) => res.json(notesData));

  // GET "/api/notes" responds with all notes from the database
  router.get("/api/notes", function (req, res) {
    res.send("notes");
  });

  // POST "/api/notes" posts the note to the database
  router.post('/api/notes', function (req, res) {
      res.send('Your note is safe with me!')
  });
  // DELETE "/api/notes" deletes the note with an id equal to req.params.id
  router.delete('/api/notes', function (req, res) {
      res.send('And like that it is gone!')
  });
};


//stays at the bottom
module.exports = router;

//use uuid! helps with automation

