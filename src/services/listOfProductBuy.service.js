const ListOfProductBuy = require('../models/ListOfProductBuy');

module.exports = {
  createNewListProductBuy: (ListOfProductBuyInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const newListProductBuy = new ListOfProductBuy(ListOfProductBuyInfo);
        const saveListProductBuy = await newListProductBuy.save();
        const { __v, createdAt, updatedAt, ...newListProductInfo } =
          saveListProductBuy._doc;
        resolve(newListProductInfo);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateListProductBuy: (listOfProductId, ListOfProductBuyInfo) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedListProductBuy = await ListOfProductBuy.findOneAndUpdate(
          listOfProductId,
          {
            $set: ListOfProductBuyInfo,
          },
          {
            new: true,
          },
        );
        const { __v, createdAt, updatedAt, ...others } =
          updatedListProductBuy._doc;
        resolve(others);
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteListProductBuy: (listOfProductId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const deletedListProductBuy = await ListOfProductBuy.findByIdAndDelete(
          discountId,
        );
        resolve(deletedListProductBuy);
      } catch (error) {
        reject(error);
      }
    });
  },
  getListOfProductOfCustomer: (idCustomer) => {
    return new Promise(async (resolve, reject) => {
      try {
        const listOfProducts = await ListOfProductBuy.find({ idCustomer });
        resolve(listOfProducts);
      } catch (error) {
        reject(error);
      }
    });
  },
};
