const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  ShippingID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  ShippingDate: { type: Date },
  DeliveryDate: { type: Date },
  TrackingNumber: { type: String },
  Status: { type: String },
});

const Shipping = mongoose.model('Shipping', shippingSchema);

module.exports = Shipping;
