const router = require("express").Router();
const store = require("../db/store");

//use router var (router.get, post, delete) 

//call class store in here 

// GET "/api/notes" responds with all notes from the database
router.get()
// POST "/api/notes" posts the note to the database
router.post()
// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete()


//stays at the bottom
module.exports = router;