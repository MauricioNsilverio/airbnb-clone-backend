const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, // tipo id do objeto: referencia do usuário que criou este spot
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId, // tipo id do objeto: referencia do usuário que criou este spot
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);