import mongoose from 'mongoose';
// Define a MongoDB schema for the Delivery collection
const DeliverySchema = new mongoose.Schema({
  type: { type: String, require: true },
  time: { type: Date, require: true },
  const: { type: Number, require: true },
});

const Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;
