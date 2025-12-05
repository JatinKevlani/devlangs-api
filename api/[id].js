const languages = require("../languages.json");

export default function handler(req, res) {
  const id = parseInt(req.query.id);
  const lang = languages.find((l) => l.id === id);

  if (!lang) {
    return res.status(404).json({ error: "Language not found" });
  }

  res.status(200).json(lang);
}
