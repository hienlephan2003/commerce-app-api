const mongoose = require('mongoose');
// Define a MongoDB schema for the Product collection
const ProductSchema = new mongoose.Schema({
  name: { type: String, require: true },
  nameOfManufacturer: { type: String, require: true },
  descriptionInformation: { type: String, require: true },
  technicalInformation: { type: String, require: true },
  price: { type: Number, required: true },
  status: { type: Number, required: true },
  idCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  thumbnailimage: { type: String, require: true },
  rates: [
    {
      rate: { type: Number, required: true },
      idCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true,
      },
    },
  ],
});
ProductSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
