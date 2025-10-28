const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const catsFile = "./data/cats.json";
const adoptionsFile = "./data/adoptions.json";

// Helper para leer/escribir JSON
const readJSON = (file) => JSON.parse(fs.readFileSync(file));
const writeJSON = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// GET /cats → lista de gatos
app.get("/cats", (req, res) => {
  const cats = readJSON(catsFile);
  res.json(cats);
});

// POST /cats → añadir gato
app.post("/cats", (req, res) => {
  const cats = readJSON(catsFile);
  const newCat = { id: Date.now(), ...req.body };
  cats.push(newCat);
  writeJSON(catsFile, cats);
  res.status(201).json(newCat);
});

// POST /adoptions → enviar solicitud de adopción
app.post("/adoptions", (req, res) => {
  const adoptions = fs.existsSync(adoptionsFile) ? readJSON(adoptionsFile) : [];
  const newAdoption = { id: Date.now(), ...req.body };
  adoptions.push(newAdoption);
  writeJSON(adoptionsFile, adoptions);
  res.status(201).json(newAdoption);
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
