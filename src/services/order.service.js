const Order = require('../models/Order');
const Payment = require('../models/Payment');
const {
  createNewPayment,
  updatePayment,
} = require('../services/payment.service');
exports.createNewOrder = (order, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (order.status) delete order.status;
      if (order.discounts) {
        order.discounts = this.checkDiscounts(order.discounts);
      }
      order.customerId = userId;
      const newOrder = new Order(order);
      await newOrder.populate({
        path: 'items.idProduct',
      });
      console.log(newOrder.totalCost);
      const saveOrder = await newOrder.save();
      const { createdAt, updatedAt, ...newOrderInfo } = newOrder._doc;
      console.log(newOrderInfo.totalCost);
      const paymentPayload = {
        orderId: newOrderInfo._id,
        amount: newOrder.totalCost,
      };
      saveOrder.payment = await createNewPayment(paymentPayload);
      resolve(newOrderInfo);
    } catch (e) {
      reject(e);
    }
  });
};
exports.changePaymentMethod = (
  orderId,
  userId,
  paymentMethod,
  newdiscounts = [],
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.findById(orderId).populate('totalCost');
      if (order.customerId != userId) {
        reject('Not found order');
      }
      if (order.paymentType == paymentMethod) {
        reject('You need change payment method');
      }
      order.discounts = [];
      if (newdiscounts != []) {
        order.discounts = this.checkDiscounts(newdiscounts);
      }
      order.save();
      const payment = await Payment.findOne({ orderId });
      if (payment.amount != order.totalCost) {
        payment.amount = order.totalCost;
        payment.save();
      }
      resolve(newOrderInfo);
    } catch (e) {
      reject(e);
    }
  });
};
exports.checkDiscounts = (discounts) => {
  return discounts;
};
exports.changeOrderStatus = (orderId, status) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updateOrder = await Order.findByIdAndUpdate(
        orderId,
        { status: status },
        { new: true },
      );
      // console.log(updateOrder);
      if (!updateOrder) throw 'Not found order';
      resolve(updateOrder);
    } catch (e) {
      reject(e);
    }
  });
};
exports.getListOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrder = await Order.find().exec();
      resolve(allOrder);
    } catch (e) {
      reject(e);
    }
  });
};
exports.getOrderByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrders = await Order.find({ customerId: userId }).exec();
      resolve(allOrders);
    } catch (e) {
      reject(e);
    }
  });
};
