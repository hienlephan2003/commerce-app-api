const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const { verifyToken } = require('../middlewares/verifyToken.js');

router.post('/', verifyToken, categoryController.createCategory);
// router.put('/:id', verifyToken, categoryController.updateCategory);
// router.delete('/:id', verifyToken, categoryController.deleteCategory);
router.get('/:id', categoryController.getCategory);
// router.get('/', categoryController.getAllCategorys);

module.exports = router;
