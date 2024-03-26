
module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Utilisateur = require('../modeles/utilisateur');


router.post('/connexion', async (req, res) => {
  const { email, login } = req.body;

  try {
    const utilisateur = await Utilisateur.findOne({ email });

    if (!utilisateur) {
      return res.status(404).json({ message: "L'email n'existe pas" });
    }

    if (utilisateur.login !== login) {
      return res.status(401).json({ message: 'login incorrect' });
    }

    const token = jwt.sign({ id: utilisateur._id, email: utilisateur.email }, 'votre_clé_secrète', { expiresIn: '24h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de serveur' });
  }
});

router.post('/verifier-utilisateur', async (req, res) => {
    const { email } = req.body;
  
    try {
     
      const utilisateur = await Utilisateur.findOne({ email });
  
      if (!utilisateur) {
        return res.status(404).json({ message: "L'utilisateur n'existe pas" });
      }
  
     
      res.status(200).json({ message: 'L\'utilisateur existe' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur de serveur' });
    }
  });
module.exports = router;


