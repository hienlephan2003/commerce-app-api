const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken, verifyAndAdmin } = require('../middlewares/verifyToken');

router.post('/', verifyToken, userController.updatePerson);
router.get('/all', verifyAndAdmin, userController.getAllPersons);
router.get('/', verifyToken, userController.getProfile);
router.post('/receiver', verifyToken, userController.addReceiverInformation);
module.exports = router;
