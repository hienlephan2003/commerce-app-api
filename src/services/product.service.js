import Product from '../models/Product';
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
      const updateProduct = await ShowTime.findByIdAndUpdate(
        productId,
        {
          $set: product,
        },
        { new: true },
      );
      const { __v, createdAt, updatedAt, ...others } = updateProduct._doc;
      resolve(others);
    } catch (e) {
      reject(e);
    }
  });
};
exports.getListProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProduct = await Product.find()
        .limit(10)
        .sort({ startAt: 1 })
        .exec();
      resolve(allProduct);
    } catch (e) {
      reject(e);
    }
  });
};
