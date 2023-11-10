const discountService = require('../services/discount.service');

module.exports = {
  getAllDiscountsController: async (req, res) => {
    try {
      const discounts = await discountService.getAllDiscounts();
      return res.status(200).json(discounts);
    } catch (error) {
      return res.status(500).json('Discounts are not found');
    }
  },
  getDiscountByIdController: async (req, res) => {
    try {
      const discountId = req.params.discountId;
      const discount = await discountService.getDiscountById(discountId);
      return res.status(200).json(discount);
    } catch (error) {
      return res.status(500).json('Discount is not found');
    }
  },
  createNewDiscountController: async (req, res) => {
    try {
      const discountInfo = req.body;
      const newDiscount = await discountService.createNewDiscount(discountInfo);
      return res.status(201).json(newDiscount);
    } catch (error) {
      return res.status(500).json('Can not create new discount');
    }
  },
  updateDiscountController: async (req, res) => {
    try {
      const discountId = req.params.discountId;
      const newDiscountInfo = req.body;
      const newDiscount = await discountService.updateDiscount(
        discountId,
        newDiscountInfo,
      );
      return res.status(200).json(newDiscount);
    } catch (error) {
      return res.status(500).json('Can not update discount');
    }
  },
  deleteDiscountController: async (req, res) => {
    try {
      const discountId = req.params.discountId;
      const deletedDiscount = await discountService.deleteDiscount(discountId);
      return res.status(200).json(deletedDiscount);
    } catch (error) {
      return res.status(500).json('Can not delete discount');
    }
  },
};
