const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insulinSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  units: { type: Number, required: true },  // La quantité d'insuline en unités
  timestamp: { type: Date, default: Date.now }, // Horodatage de la prise d'insuline
});

module.exports = mongoose.model('Insulin', insulinSchema);
