const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  OrderID: { type: String, required: true, unique: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  OrderDate: { type: Date, default: Date.now },
  Status: { type: String },
  TotalAmount: { type: Number },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
