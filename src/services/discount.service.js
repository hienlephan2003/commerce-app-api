const Discount = require('../models/Discount');

module.exports = {
  getAllDiscounts: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const discounts = await Discount.find()
          .limit(10)
          .sort({ startAt: 1 })
          .exec();
        resolve(discounts);
      } catch (error) {
        reject(error);
      }
    });
  },
  getDiscountById: (discountId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const discount = await Discount.findById(discountId);
        resolve(discount);
      } catch (error) {
        reject(error);
      }
    });
  },
  createNewDiscount: (discountInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newDiscount = new Discount(discountInfo);
        const saveDiscount = await newDiscount.save();
        const { __v, createdAt, updatedAt, ...newDiscountInfo } =
          saveDiscount._doc;
        resolve(newDiscountInfo);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateDiscount: (discountId, newDiscountInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedDiscount = await Discount.findByIdAndUpdate(
          discountId,
          {
            $set: newDiscountInfo,
          },
          {
            new: true,
          },
        );
        const { __v, createdAt, updatedAt, ...others } = updatedDiscount._doc;
        resolve(others);
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteDiscount: (discountId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deletedDiscount = await Discount.findByIdAndDelete(discountId);
        resolve(deletedDiscount);
      } catch (error) {
        reject(error);
      }
    });
  },
};
