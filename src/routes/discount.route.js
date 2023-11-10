const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discount.controller');
const { verifyToken } = require('../middlewares/verifyToken');

router.use(verifyToken);
router.get('/', discountController.getAllDiscountsController);
router.get('/:discountId', discountController.getDiscountByIdController);
router.post('/', discountController.createNewDiscountController);
router.put('/:discountId', discountController.updateDiscountController);
router.delete('/:discountId', discountController.deleteDiscountController);

module.exports = router;
