const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  CategoryID: { type: Number, required: true, unique: true },
  CategoryName: { type: String, required: true },
}, {
  timestamps: true,
});

categorySchema.pre('save', function (next) {
  const doc = this;
  if (!doc.isNew) {
    return next();
  }

  // Auto-increment CategoryID starting from 1
  mongoose.model('Category').countDocuments({}, (err, count) => {
    if (err) {
      return next(err);
    }
    doc.CategoryID = count + 1;
    next();
  });
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
