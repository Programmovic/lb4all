const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  RatingID: { type: String, required: true, unique: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  RatingValue: { type: Number, required: true },
  Review: { type: String },
  Date: { type: Date, default: Date.now },
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
