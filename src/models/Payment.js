const mongoose = require('mongoose');
// Define a MongoDB schema for the Payment collection
const PaymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Success', 'Failed', 'Pending'],
      default: 'Pending',
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
