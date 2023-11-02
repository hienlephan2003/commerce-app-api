const mongoose = require('mongoose');
// Define a MongoDB schema for the Receipt collection
const ReceiptSchema = new mongoose.Schema({
  idCustomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  paymentInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentInfomation',
    required: true,
  },
  receiverInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReceiverInfomation',
    required: true,
  },
  typeOfDelivery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Delivery',
    required: true,
  },
  totalCost: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: Number },
  saleValue: Number,
  idDiscount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount',
    required: true,
  },
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;
