const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const languages = require("./languages.json");

// Get all languages
app.get("/languages", (req, res) => {
  res.json(languages);
});

// Get language by ID
app.get("/languages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lang = languages.find((l) => l.id === id);

  if (!lang) {
    return res.status(404).json({ error: "Language not found" });
  }
  res.json(lang);
});

// Search language by name
app.get("/search", (req, res) => {
  const name = req.query.name?.toLowerCase();
  if (!name) {
    return res.status(400).json({ error: "Please provide a search query" });
  }

  const results = languages.filter(l =>
    l.name.toLowerCase().includes(name)
  );

  if(!results) {
    return res.status(404).json({ error: "No Languages found matching the query" });
  }

  res.json("No Languages found matching the query");
});

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to DevLangs API");
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
