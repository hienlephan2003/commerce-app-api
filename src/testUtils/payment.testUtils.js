const mongoose = require('mongoose');

paymentTransactionPayload = {
  orderId: new mongoose.Types.ObjectId().toString(),
};

module.exports = { paymentTransactionPayload };
