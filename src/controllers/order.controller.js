const orderService = require('../services/order.service.js');
const Order = require('../models/Order.js');
const { ORDER_STATUS } = require('../utils/enum.js');
module.exports = {
  createOrder: async (req, res) => {
    try {
      const order = req.body;
      order.person = req.person;
      const newOrder = await orderService.createNewOrder(
        order,
        order.person.id,
      );
      return res.status(200).json(newOrder);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  },
  changePaymentMethod: async (req, res) => {
    try {
      const updateOrder = await orderService.changePaymentMethod(
        req.params.id,
        req.person.id,
        req.body.paymentMethod,
        req.body.discounts,
      );
      return res.status(200).json(updateOrder);
    } catch (err) {
      console.log('Update' + err);
      return res.status(500).json(err);
    }
  },
  cancelOrder: async (req, res) => {
    try {
      const canceledOrder = await orderService.changeOrderStatus(
        req.params.id,
        ORDER_STATUS.Canceled,
      );
      return res.status(200).json(canceledOrder);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate({
        path: 'items.idProduct',
      });
      console.log(order);
      if (!order) {
        return res.status(404).json('order not found');
      } else return res.status(200).json(order);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  getOrderByUserId: async (req, res) => {
    try {
      const orders = await Order.find({ customerId: req.person.id });
      if (!orders) {
        return res.status(404).json('order not found');
      } else return res.status(200).json(orders);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const allOrders = await orderService.getListOrder();
      return res.status(200).json(allOrders);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
