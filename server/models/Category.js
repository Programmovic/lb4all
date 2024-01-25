const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  CategoryID: { type: String, required: true, unique: true },
  CategoryName: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
