const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  BrandID: { type: String, required: true, unique: true },
  BrandName: { type: String, required: true },
  Description: { type: String },
  Logo: { type: String },
  Location: { type: String },
  RoleID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRole', required: true },
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
