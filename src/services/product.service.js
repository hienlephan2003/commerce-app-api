const Product = require('../models/Product');
exports.createNewProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newProduct = new Product(product);
      const saveProduct = await newProduct.save();
      const { __v, createdAt, updatedAt, ...newProductInfo } = saveProduct._doc;
      resolve(newProductInfo);
    } catch (e) {
      reject(e);
    }
  });
};
exports.updateProduct = (productId, product) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log(productId);
      // console.log(product);
      await Product.findByIdAndUpdate(productId, product);
      const updateProduct = await Product.findById(productId);
      resolve(updateProduct);
    } catch (e) {
      reject(e);
    }
  });
};
exports.getListProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProduct = await Product.find().exec();
      resolve(allProduct);
    } catch (e) {
      reject(e);
    }
  });
};
