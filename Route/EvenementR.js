const express = require('express');
const router = express.Router();
const Evenement = require('../modeles/Evenement');


router.post('/ajouter-evenement', async (req, res) => {
  const { titre,  } = req.body;

  try {
    
    const evenementExisteDeja = await Evenement.findOne({ titre });
    if (evenementExisteDeja) {
      return res.status(400).json({ message: 'Un événement avec ce titre existe déjà' });
    }

   
    if (typeof priorite !== 'string') {
      return res.status(400).json({ message: 'La priorité doit être une chaîne de caractères' });
    }

   
    const nouvelEvenement = new Evenement({
      titre,
      priorite,
    });

   
    await nouvelEvenement.save();

    res.status(201).json({ message: 'Événement ajouté avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de serveur' });
}

  
    try {
      const evenement = await Evenement.findById(eventId);
  
      if (!evenement) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
      res.status(200).json(evenement);
    }
     catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur de serveur' });
    }
});


module.exports = router;
