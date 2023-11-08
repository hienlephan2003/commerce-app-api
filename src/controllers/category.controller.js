const categoryService = require('../services/category.service.js');
const Category = require('../models/Category.js');
module.exports = {
  createCategory: async (req, res) => {
    try {
      const category = req.body;
      const newCategory = await categoryService.createNewCategory(category);
      // console.log(newCategory);
      res.status(200).json(newCategory);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
  updateCategory: async (req, res) => {
    try {
      console.log(req.body);
      const updateCategory = await categoryService.updateCategory(
        req.params.id,
        req.body,
      );
      res.status(200).json(updateCategory);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.toString() });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json('Category successfully deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        res.status(404).json('category not found');
        return;
      } else res.status(200).json(category);
    } catch (err) {
      res.status(500).json('Hehe');
    }
  },
  getAllCategorys: async (req, res) => {
    try {
      const listCategory = await categoryService.getListCategory();
      res.status(200).json(listCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
