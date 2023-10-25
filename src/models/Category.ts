const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  type: String,
});
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
