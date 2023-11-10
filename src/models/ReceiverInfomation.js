const mongoose = require('mongoose');
// Define a MongoDB schema for the ReceiverInfomation collection
const ReceiverInfomationSchema = new mongoose.Schema({
  idCustomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
  },
  notice: { type: String, required: false },
});

const ReceiverInfomation = mongoose.model(
  'ReceiverInfomation',
  ReceiverInfomationSchema,
);

module.exports = ReceiverInfomation;
