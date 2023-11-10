const Payment = require('../models/Payment');
exports.createNewPayment = (payment) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(payment);
      const newPayment = new Payment(payment);
      const savePayment = await newPayment.save();
      const { __v, createdAt, updatedAt, ...newPaymentInfo } = savePayment._doc;
      resolve(newPaymentInfo);
    } catch (e) {
      reject(e);
    }
  });
};
exports.updatePayment = (orderId, payment) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatePayment = await Payment.findOneAndUpdate(
        { orderId },
        { ...payment },
        { new: true },
      );
      resolve(updatePayment);
    } catch (e) {
      reject(e);
    }
  });
};
