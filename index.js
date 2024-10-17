// index.js
const express = require("express");
const sendMail = require("./config/sendMail");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bonjour, monde!");
});

// Route d'API pour envoyer un email
app.post("/send-email", async (req, res) => {
  const { to, token, status, senderName, clientName, phone, date } = req.body;

  if (
    !to ||
    !token ||
    !status ||
    !senderName ||
    !clientName ||
    !phone ||
    !date
  ) {
    return res.status(400).send("Tous les champs requis doivent être remplis.");
  }

  try {
    await sendMail(to, token, status, senderName, clientName, phone, date);
    res.status(200).send("Email envoyé avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    res.status(500).send("Erreur lors de l'envoi de l'email.");
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
