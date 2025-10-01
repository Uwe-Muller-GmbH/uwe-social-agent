import express from "express";
import dotenv from "dotenv";
import { generatePost } from "./services/postGenerator.js";
import { loadCatalog } from "./services/catalogReader.js";

dotenv.config();
const app = express();
app.use(express.json());

// Route: Generiere Post für eine Maschine
app.get("/generatePost/:id", async (req, res) => {
  const catalog = loadCatalog();
  const machine = catalog[req.params.id];

  if (!machine) {
    return res.status(404).json({ error: "Maschine nicht gefunden" });
  }

  try {
    const post = await generatePost(machine);
    res.json({ id: req.params.id, post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fehler bei Post-Generierung" });
  }
});

// Route: Generiere Posts für alle Maschinen
app.get("/generateAll", async (req, res) => {
  const catalog = loadCatalog();
  const posts = {};

  for (const [id, machine] of Object.entries(catalog)) {
    posts[id] = await generatePost(machine);
  }

  res.json({ posts });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Social Agent läuft auf Port ${PORT}`));
