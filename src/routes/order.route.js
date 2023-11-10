const router = require('express').Router();
const orderController = require('../controllers/order.controller');
const { verifyToken, verifyAndAdmin } = require('../middlewares/verifyToken');

router.post('/', verifyToken, orderController.createOrder);
router.post('/:id', verifyToken, orderController.changePaymentMethod);
router.post('/canceled/:id', verifyToken, orderController.cancelOrder);
router.get('/all', verifyAndAdmin, orderController.getAllOrders);
router.get('/:id', verifyToken, orderController.getOrderById);
router.get('/', verifyToken, orderController.getOrderByUserId);

module.exports = router;
