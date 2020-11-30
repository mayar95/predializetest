const mongoose = require('mongoose');

const ticketsSchema = mongoose.Schema({
    ticketCode: String,
    status: String,
    createdAt: mongoose.Schema.Types.Date,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  });

module.exports = mongoose.model('Ticket', ticketsSchema);
