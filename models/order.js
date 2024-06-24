const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
    },
  ],
  payment: {
    cardNumber: String,
    expiryDate: String,
    cvv: String,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
