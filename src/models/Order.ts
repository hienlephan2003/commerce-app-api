import mongoose from 'mongoose';
// Define a MongoDB schema for the Order collection
const OrderSchema = new mongoose.Schema(
  {
    idCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: true,
    },
    idProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: true },
    idReceipt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Receipt',
      required: true,
    },
    date: { type: Date, required: true },
    status: { type: Number, required: true },
  },
  { timestamps: true },
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
