const router = require('express').Router();
const productController = require('../controllers/product.controler.js');
const { verifyToken } = require('../middlewares/verifyToken');

router.post('/', verifyToken, productController.createProduct);
router.patch('/:id', verifyToken, productController.updateProduct);
router.delete('/:id', verifyToken, productController.deleteProduct);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProducts);

module.exports = router;
