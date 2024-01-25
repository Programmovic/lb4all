const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  DiscountID: { type: String, required: true, unique: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  DiscountPercentage: { type: Number, required: true },
  StartDate: { type: Date },
  EndDate: { type: Date },
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
