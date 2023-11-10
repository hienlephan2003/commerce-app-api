const router = require('express').Router();
const deliveryController = require('../controllers/delivery.controller');
const { verifyToken, verifyAndAdmin } = require('../middlewares/verifyToken');

router.post('/', verifyAndAdmin, deliveryController.createDelivery);
router.get('/:id', verifyToken, deliveryController.getDeliveryByDeliveryId);
router.put('/:id', verifyAndAdmin, deliveryController.changeDeliveryStatus);

module.exports = router;
