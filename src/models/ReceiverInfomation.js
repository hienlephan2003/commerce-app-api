const mongoose = require('mongoose');
// Define a MongoDB schema for the ReceiverInfomation collection
const ReceiverInfomationSchema = new mongoose.Schema({
  idCustomer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true,
  },
  name: { type: String, require: true },
  address: { type: String, require: true },
  phoneNumber: { type: Number, required: true },
  Note: { type: String, require: false },
});

const ReceiverInfomation = mongoose.model(
  'ReceiverInfomation',
  ReceiverInfomationSchema,
);

module.exports = ReceiverInfomation;
