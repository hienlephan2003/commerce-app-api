const deliveryService = require('../services/delivery.service.js');
const Delivery = require('../models/Delivery.js');
const { ORDER_STATUS } = require('../utils/enum.js');
module.exports = {
  createDelivery: async (req, res) => {
    try {
      const newDelivery = await deliveryService.createNewDelivery(req.body);
      return res.status(200).json(newDelivery);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  },
  getDeliveryByDeliveryId: async (req, res) => {
    try {
      const delivery = await Delivery.findById(req.params.id);
      if (!delivery) {
        return res.status(404).json('delivery not found');
      } else return res.status(200).json(delivery);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  changeDeliveryStatus: async (req, res) => {
    try {
      const canceledDelivery = await deliveryService.changeDeliveryStatus(
        req.params.id,
        req.body.status ? req.body.status : '',
      );
      return res.status(200).json(canceledDelivery);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
