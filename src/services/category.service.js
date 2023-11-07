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
      const updateCategory = await Category.findByIdAndUpdate(
        categoryId,
        {
          $set: category,
        },
        { new: true },
      );
      const { __v, createdAt, updatedAt, ...others } = updateCategory._doc;
      resolve(others);
    } catch (e) {
      reject(e);
    }
  });
};
exports.getListCategory = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allCategory = await Category.find()
        .limit(10)
        .sort({ startAt: 1 })
        .exec();
      resolve(allCategory);
    } catch (e) {
      reject(e);
    }
  });
};
