const ListOfProductBuyService = require('../services/listOfProductBuy.service');

module.exports = {
  getListOfProductOfCustomerController: async (req, res) => {
    try {
      const idCustomer = req.params.idCustomer;
      const listOfProducts =
        await ListOfProductBuyService.getListOfProductOfCustomer(idCustomer);
      return res.status(200).send(listOfProducts);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Something went wrong');
    }
  },
  createNewListProductBuyController: async (req, res) => {
    try {
      const listOfProductsInfo = req.body;
      const newListOfProducts =
        await ListOfProductBuyService.createNewListProductBuy(
          listOfProductsInfo,
        );
      return res.status(200).send(newListOfProducts);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Something went wrong');
    }
  },
  updateListProductBuyController: async (req, res) => {
    try {
      const idListOfProduct = req.params.idListOfProduct;
      const listOfProductsInfo = req.body;
      const updatedListProductBuy =
        await ListOfProductBuyService.updateListProductBuy(
          idListOfProduct,
          listOfProductsInfo,
        );
      resolve(updatedListProductBuy);
    } catch (error) {
      reject(error);
    }
  },
  deleteListProductBuy: async (req, res) => {
    try {
      const idListOfProduct = req.params.idListOfProduct;
      const deleteProductBuyController =
        await ListOfProductBuyService.deleteListProductBuy(idListOfProduct);
      resolve(deleteProductBuyController);
    } catch (error) {
      reject(error);
    }
  },
};
