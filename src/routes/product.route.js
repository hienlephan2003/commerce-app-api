import router from ('express').Router();
import productController from '../controllers/product.controller';
const {verifyToken} = require("../middlewares/verifyToken")

router.post("/", verifyToken ,productController.createProduct);
router.put("/:id", verifyToken ,productController.updateProduct);
router.delete("/:id", verifyToken , productController.deleteProduct);
router.get("/:id" ,productController.getProduct);
router.get("/" ,productController.getAllProducts);


module.exports = router
