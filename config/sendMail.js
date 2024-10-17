// sendMail.js
const transporter = require("./mailer"); // Assurez-vous que le chemin d'accès est correct

/**
 * Fonction pour envoyer un email avec des informations sur le colis.
 * @param {string} to - L'adresse email du destinataire.
 * @param {string} token - Le jeton du colis.
 * @param {string} status - Le statut de la livraison.
 * @param {string} senderName - Le nom de l'expéditeur.
 * @param {string} clientName - Le nom du client.
 * @param {string} phone - Le numéro de téléphone.
 * @param {string} date - La date de livraison.
 * @returns {Promise<void>}
 */
const sendMail = async (
  to,
  token,
  status,
  senderName,
  clientName,
  phone,
  date
) => {
  // Créez l'email avec les informations nécessaires
  const mailOptions = {
    from: "20au004@esisalama.org", // Votre adresse email
    to: to, // Destinataire
    subject: "Votre Jeton de Retrait",
    html: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Jeton de Retrait</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h1 {
                  color: #333;
                  text-align: center;
              }
              .info {
                  margin: 15px 0;
                  padding: 10px;
                  border: 1px solid #e0e0e0;
                  border-radius: 5px;
                  background-color: #f9f9f9;
              }
              .footer {
                  margin-top: 20px;
                  text-align: center;
                  font-size: 14px;
                  color: #777;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Votre Jeton de Retrait</h1>
              <div class="info">
                  <p><strong>Jeton du Colis :</strong> ${token}</p>
                  <p><strong>Statut de la Livraison :</strong> ${status}</p>
                  <p><strong>Nom de l'Expéditeur :</strong> ${senderName}</p>
                  <p><strong>Nom du Client :</strong> ${clientName}</p>
                  <p><strong>Téléphone :</strong> ${phone}</p>
                  <p><strong>Date :</strong> ${date}</p>
              </div>
              <p>Veuillez présenter ce jeton lors du retrait de votre colis.</p>
              <div class="footer">
                  <p>Merci de votre confiance.</p>
              </div>
          </div>
      </body>
      </html>
    `,
  };

  // Envoyez l'email
  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
