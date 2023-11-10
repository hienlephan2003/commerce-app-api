const mongoose = require('mongoose');
// Define a MongoDB schema for the Order collection
const ApplyDiscount = new mongoose.Schema({
  discountId: { type: mongoose.Schema.Types.ObjectId, required: true },
  amount: { type: Number, default: 0 },
});
const OrderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: true,
    },
    items: [
      {
        idProduct: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    paymentType: {
      type: String,
      enum: ['Cash', 'Online'],
      default: 'Cash',
    },
    status: {
      type: String,
      enum: ['Processing', 'Completed', 'Exchanged', 'Paid', 'Canceled'],
      default: 'Processing',
    },
    discounts: [ApplyDiscount],
    receiverInfomation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ReceiverInfomation',
    },
  },
  { timestamps: true, toJSON: { virtuals: true } },
);
OrderSchema.virtual('totalCost').get(function () {
  return (
    this.items.reduce((total, product) => {
      return total + product.idProduct.price * product.quantity;
    }, 0) +
    this.discounts.reduce((total, discount) => {
      return total + discount.amount;
    }, 0)
  );
});
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
