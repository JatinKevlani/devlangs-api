const languages = require("../languages.json");

export default function handler(req, res) {
  const name = req.query.name?.toLowerCase();
  if (!name) {
    return res.status(400).json({ error: "Please provide a search query" });
  }

  const results = languages.filter((l) =>
    l.name.toLowerCase().includes(name)
  );

  if (results.length === 0) {
    return res.status(404).json({ error: "No languages found matching the query" });
  }

  res.status(200).json(results);
}
