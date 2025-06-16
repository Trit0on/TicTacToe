const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Config EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Bootstrap
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

// Route principale → page du jeu
app.get("/", (req, res) => {
  res.render("game", { title: "Morpion - Node.js" });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé : http://localhost:${PORT}`);
});
