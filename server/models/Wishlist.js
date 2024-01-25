const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
  WishListID: { type: String, required: true, unique: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  AddedDate: { type: Date, default: Date.now },
});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;
