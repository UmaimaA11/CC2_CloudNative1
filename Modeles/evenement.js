const mongoose = require('mongoose');


const evenementSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date
  },
  lieu: {
    type: String
  },
 categorie: {
    type: String
  }

});


const evenementModel = mongoose.model('evenement', evenementSchema);

module.exports = evenementModel;
