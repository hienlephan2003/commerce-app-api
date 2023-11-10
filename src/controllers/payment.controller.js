const paymentService = require('../services/payment.service.js');
const Payment = require('../models/Payment.js');
const { PAYMENT_STATUS } = require('../utils/enum.js');
module.exports = {
  newPaymentTransaction: async (req, res) => {
    try {
      const payment = {
        orderId: req.body.orderId,
      };

      const newPayment = await paymentService.updatePayment(payment.orderId, {
        status: PAYMENT_STATUS.Success,
      });
      return res.status(200).json(newPayment);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  },
};
