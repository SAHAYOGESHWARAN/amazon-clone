import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModel.js';

// @desc Create new category
// @route POST /api/categories
// @access Private/Admin
const createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;

    const category = new Category({ name });

    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
});

// @desc Get all categories
// @route GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

// @desc Get single category by ID
// @route GET /api/categories/:id
// @access Public
const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
        res.json(category);
    } else {
        res.status(404);
        throw new Error('Category not found');
    }
});

export { createCategory, getCategories, getCategoryById };
