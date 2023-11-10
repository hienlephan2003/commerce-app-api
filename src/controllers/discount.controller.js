const discountService = require('../services/discount.service');

module.exports = {
  getAllDiscountsController: async (req, res) => {
    try {
      const discounts = await discountService.getAllDiscounts();
      return discounts
        ? res.status(200).json(discounts)
        : res.status(404).json('Discounts are not found');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  getDiscountByIdController: async (req, res) => {
    try {
      const discountId = req.params.discountId;
      const discount = await discountService.getDiscountById(discountId);
      return discount
        ? res.status(200).json(discount)
        : res.status(404).json('Discount is not found');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  createNewDiscountController: async (req, res) => {
    try {
      const discountInfo = req.body;
      const newDiscount = await discountService.createNewDiscount(discountInfo);
      return newDiscount
        ? res.status(201).json(newDiscount)
        : res.status(400).json('Can not create new discount');
    } catch (error) {
      return res.status(500).json(error.message);
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
      return newDiscount
        ? res.status(200).json(newDiscount)
        : res.status(400).json('Can not update new discount');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  deleteDiscountController: async (req, res) => {
    try {
      const discountId = req.params.discountId;
      const deletedDiscount = await discountService.deleteDiscount(discountId);
      return deletedDiscount
        ? res.status(200).json(deletedDiscount)
        : res.status(400).json('Can not delete discount');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
