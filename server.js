const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

const note = [
  {
    title: "Test Title",
    text: "Test text",
  },
];

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

//get our entire database
app.get("/api/notes", (req, res) => {
  return res.json(note);
});

//gets a specific character from the database
app.get("/api/notes/:thatone", (req, res) => {
  const chosen = req.params.note;
  const chosenNote =
    note.find((thatone) => thatone.routeName == chosen) || false;
  return res.json(chosenNote);
});

//create a new character
app.post("/api/newnote", (req, res) => {
  const newThought = req.body;
  newThought.routeName = newThought.name.replace(/\s+/g, "").toLowerCase();
  note.push(newThought);
  res.json(newThought);
});

//start the server
app.listen(PORT, () => console.log(`App is listening on https://${PORT}`));
