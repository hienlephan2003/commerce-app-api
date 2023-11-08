const Category = require('../models/Category');
exports.createNewCategory = (category) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (category.type != undefined) {
        const newCategory = new Category(category);
        const saveCategory = await newCategory.save();
        const { __v, createdAt, updatedAt, ...newCategoryInfo } =
          saveCategory._doc;
        resolve(newCategoryInfo);
      } else reject('Missing parameter');
    } catch (e) {
      reject(e);
    }
  });
};
exports.updateCategory = (categoryId, category) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Category.findByIdAndUpdate(categoryId, category);
      const updateCategory = await Category.findById(categoryId);
      resolve(updateCategory);
    } catch (e) {
      reject(e);
    }
  });
};
exports.getListCategory = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allCategory = await Category.find();
      resolve(allCategory);
    } catch (e) {
      reject(e);
    }
  });
};
