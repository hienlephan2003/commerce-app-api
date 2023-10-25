import mongoose from 'mongoose';
// Define a MongoDB schema for the ProductTechnical collection
const ProductTechnicalSchema = new mongoose.Schema({
  idProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  nameOfAttribute: { type: String, require: true },
  content: { type: String, require: true },
  uses: { type: String, require: true },
  material: { type: String, require: true },
  exps: Number,
});

const ProductTechnical = mongoose.model(
  'ProductTechnical',
  ProductTechnicalSchema,
);

module.exports = ProductTechnical;
