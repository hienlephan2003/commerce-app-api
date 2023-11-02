const router = require('express').Router();
const authController = require('../controllers/auth.controller');

// REGISTRATION
router.post('/register', authController.createPerson);
// LOGIN
router.post('/login', authController.loginPerson);

module.exports = router;
