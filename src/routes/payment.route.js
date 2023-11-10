const router = require('express').Router();
const paymentController = require('../controllers/payment.controller');
const { verifyToken } = require('../middlewares/verifyToken');

router.post('/', verifyToken, paymentController.newPaymentTransaction);

module.exports = router;
