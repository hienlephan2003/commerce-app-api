const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discount.controller');
const { verifyToken } = require('../middlewares/verifyToken');

router.use(verifyToken);
router.get('/', discountController.getAllDiscountsController);
router.get('/:id', discountController.getDiscountByIdController);
router.post('/', discountController.createNewDiscountController);
router.put('/:id', discountController.updateDiscountController);
router.delete('/:id', discountController.deleteDiscountController);

module.exports = router;
