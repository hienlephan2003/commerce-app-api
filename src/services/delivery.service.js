const Delivery = require('../models/Delivery');
const { changeOrderStatus } = require('../services/order.service');
const { ORDER_STATUS } = require('../utils/enum');
exports.createNewDelivery = (delivery) => {
  return new Promise(async (resolve, reject) => {
    try {
      const existDelivery = await Delivery.findOne({
        orderId: delivery.orderId,
      });
      if (existDelivery) resolve(existDelivery);
      delivery.deliveryDate = new Date(delivery.deliveryDate);
      const newDelivery = new Delivery(delivery);
      const saveDelivery = await newDelivery.save();
      const { __v, createdAt, updatedAt, ...newDeliveryInfo } =
        saveDelivery._doc;
      resolve(newDeliveryInfo);
    } catch (e) {
      reject(e);
    }
  });
};
exports.changeDeliveryStatus = (deliveryId, status) => {
  return new Promise(async (resolve, reject) => {
    try {
      const delivery = await Delivery.findById(deliveryId);
      if (status && delivery.status != status) {
        delivery.status = status;
        await delivery.save();
        if (delivery.status == 'Delivered') {
          await changeOrderStatus(delivery.orderId, ORDER_STATUS.Paid);
        }
        const { __v, createdAt, updatedAt, ...newDeliveryInfo } = delivery._doc;
        resolve(newDeliveryInfo);
      } else reject('Not found status');
    } catch (e) {
      reject(e);
    }
  });
};
exports.getDelivery = (deliveryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const delivery = await Delivery.findById(deliveryId);
      resolve(delivery);
    } catch (e) {
      reject(e);
    }
  });
};
