const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    createdAt: mongoose.Schema.Types.Date,
    guaranteeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Guarantee' },
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }]
  });

module.exports = mongoose.model('Product', productSchema);
