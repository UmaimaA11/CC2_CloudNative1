const mongoose = require('mongoose');


const inscriptionSchema = new mongoose.Schema({
  utilisateur_id: {
    type: String,
    required: true
  },
  evenement_id: {
    type: String
  }

});


const inscriptionModel = mongoose.model('inscription', inscriptionSchema);

module.exports = inscriptionModel;
