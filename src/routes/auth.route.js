import router from ('express').Router();
import authController from '../controllers/auth.controller';

// REGISTRATION
router.post('/register', authController.createUser);
// LOGIN
router.post('/login', authController.loginUser);

module.exports = router;
