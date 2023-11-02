const mongoose = require('mongoose');
// Define a MongoDB schema for the PaymentInfomation collection
const paymentInfomationSchema = new mongoose.Schema({
  idCustomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },

  cardNumber: { type: String, required: true },
  expDate: { type: Date, required: true },
  ownName: { type: String, required: true },
  csv: String,
});

const PaymentInfomation = mongoose.model(
  'PaymentInfomation',
  paymentInfomationSchema,
);

module.exports = PaymentInfomation;
