const express = require('express');
const router = express.Router();
const Inscription = require('../modeles/Inscription');
const Evenement = require('../modeles/Evenement');
const Utilisateur = require('../modeles/utilisateur');


router.post('/ajouter-inscription', async (req, res) => {
  const { utilisateurId, evenementId } = req.body;

  try {

    const utilisateur = await Utilisateur.findById(utilisateurId);
    if (!utilisateur) {
      return res.status(404).json({ message: "L'utilisateur n'existe pas" });
    }

 
    const evenement = await Evenement.findById(evenementId);
    if (!evenement) {
      return res.status(404).json({ message: "L'événement n'existe pas" });
    }

   
    const nouvelleInscription = new Inscription({
      utilisateur: utilisateurId,
      evenement: evenementId,
      
    });

    
    await nouvelleInscription.save();

    res.status(201).json({ message: 'Inscription ajoutée avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de serveur' });
  }
});

module.exports = router;

