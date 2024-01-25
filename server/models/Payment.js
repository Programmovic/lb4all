const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  PaymentID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  PaymentMethod: { type: String },
  CardNumber: { type: String },
  ExpiryDate: { type: String },
  CVV: { type: String },
  Amount: { type: Number },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
