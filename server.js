
// Importation des modules
const express = require('express');

// Initialisation de l'application Express
const app = express();
const port = 3000;

// Route par défaut
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});