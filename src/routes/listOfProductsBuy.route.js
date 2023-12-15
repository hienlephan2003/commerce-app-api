const router = require('express').Router();
const listOfProductBuyController = require('../controllers/listOfProductBuy.controller');
const { verifyToken, verifyAndAdmin } = require('../middlewares/verifyToken');

router.get(
  '/:idCustomer',
  verifyToken,
  listOfProductBuyController.getListOfProductOfCustomerController,
);
router.post(
  '/',
  verifyToken,
  listOfProductBuyController.createNewListProductBuyController,
);
router.put(
  '/:idListOfProduct',
  verifyToken,
  listOfProductBuyController.updateListProductBuyController,
);
router.delete(
  '/:idListOfProduct',
  verifyToken,
  listOfProductBuyController.deleteListProductBuy,
);

module.exports = router;
