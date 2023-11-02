import productService from '../services/product.service';
import Product from '../models/Product';
module.exports = {
  createProduct: async (req, res) => {
    try {
      const product = req.body;
      const newProduct = await productService.createNewProduct(product);
      res.status(200).json(newProduct);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const updateProduct = await productService.updateProduct(req.body);
      res.status(200).json(updateProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json('Product successfully deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const listProduct = await productService.getListProduct();
      res.status(200).json(listProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
