const router = require("express").Router();
const store = require("../db/store.js");
const notesData = require("../routes/htmlRoutes");

module.exports = (app) => {
  app.get("api/notes", (req, res) => res.json(notesData));

  router.get("api/notes", function (req, res) {
    store.getNotes().then((notes) => {
      return res.json(notes);
    });
  });

  //change this a bit to make is save notes and then delete notes
  // router.get("api/notes", function (req, res) {
  //   store.getNotes().then((notes) => {
  //     return res.json(notes);
  //   });
  // });

  // POST "/api/notes" posts the note to the database
  router.post("api/notes", function (req, res) {
    res.send("Your note is safe with me!");
  });

    // DELETE "/api/notes" deletes the note with an id equal to req.params.id
    router.delete('api/notes', function (req, res) {
        res.send('And like that it is gone!')
    });
};
//call class store in here 






//stays at the bottom
module.exports = router;


