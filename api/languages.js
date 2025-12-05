const languages = require("../languages.json");

export default function handler(req, res) {
  res.status(200).json(languages);
}
