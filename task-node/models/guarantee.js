const mongoose = require('mongoose');

const guaranteeSchema = mongoose.Schema({
  endDate: String
});

module.exports = mongoose.model('Guarantee', guaranteeSchema);
