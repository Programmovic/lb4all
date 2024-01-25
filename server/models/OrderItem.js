const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  OrderItemID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  Quantity: { type: Number, required: true },
  Subtotal: { type: Number },
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;
