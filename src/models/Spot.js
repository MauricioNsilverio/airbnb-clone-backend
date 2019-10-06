const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, // tipo id do objeto: referencia do usuário que criou este spot
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);