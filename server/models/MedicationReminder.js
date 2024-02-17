const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationReminderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  medicationName: { type: String, required: true },  // Nom du médicament
  dosage: { type: String, required: true },  // Dosage, par exemple "500mg"
  reminderTime: { type: Date, required: true }, // Heure du rappel
});

module.exports = mongoose.model('MedicationReminder', medicationReminderSchema);
