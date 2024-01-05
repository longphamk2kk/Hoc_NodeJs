const productModel = require("../models/product");

module.exports = {
  createProduct: async (req = async (req, res) => {}) => {
    const body = req.nody;
    const product = await productModel.create(body);
    return res.status(201).json(product);
  },
  getProduct: async (req, res) => {
    const page = req.query.page || 1;
    const perPage = 10;

    const products = await productModel
      .find()
      .populate("categoryId")
      .sort({ createdAt: -1 })
      .skip(page * perPage - perPage)
      .limit(perPage)
      .exec();

    const count = await productModel.countDocuments();

    return res.status(200).json({
      currentPag: +page,
      totalPage: Math.ceil(count / perPage),
      count: count,
      data: products,
    });
  },
  updateProduct: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updateProduct);
  },
  deleteProduct: async (req, res) => {
    const id = req.params.id;
    const deleteProduct = await productModel.findByIdAndDelete(id);
    return res.status(200).json(deleteProduct);
  },
  findProductById: async (req, res) => {
    const id = req.params.id;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
  },
  getProductByCategoryId: async (req, res) => {
    const page = req.query.page || 1;
    const perPage = 10;
    const categoryId = req.params.categoryId;
    const bodyQuery = { categoryId };

    const products = await productModel
      .find({
        bodyQuery,
      })
      .populate("categoryId")
      .sort({ createdAt: -1 })
      .skip(page * perPage - perPage)
      .limit(perPage)
      .exec();

    const count = await productModel.countDocuments();

    return res.status(200).json({
      currentPag: +page,
      totalPage: Math.ceil(count / perPage),
      count: count,
      data: products,
    });
  },
};
