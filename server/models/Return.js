const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
  ReturnID: { type: String, required: true, unique: true },
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  ReturnReason: { type: String },
  ReturnDate: { type: Date },
  Status: { type: String },
});

const Return = mongoose.model('Return', returnSchema);

module.exports = Return;
