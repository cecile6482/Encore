const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const glucoseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  value: { type: Number, required: true },  // La valeur de la glycémie
  timestamp: { type: Date, default: Date.now }, // Horodatage de la mesure
});

module.exports = mongoose.model('Glucose', glucoseSchema);
