const mongoose = require('mongoose');


const UtilisateurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  login: {
    type: String
  },
  mdp: {
    type: String
  }
  
});


const UtilisateurModel = mongoose.model('Utilisateur', UtilisateurSchema);

module.exports = UtilisateurModel;
