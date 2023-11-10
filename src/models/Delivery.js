const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  deliveryDate: { type: Date, required: true },
  receiverInfomationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReceiverInfomation',
    required: true,
  },
  status: {
    type: String,
    enum: ['Processing', 'Shipping', 'Delivered', 'Failed'],
    default: 'Processing',
  },
});

const Delivery = mongoose.model('Delivery', DeliverySchema);

module.exports = Delivery;
