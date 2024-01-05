const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  findProductById,
  getProductByCategoryId,
} = require("../controllers/productControler");

router.route("/").post(createProduct).get(getProduct);

router.route("/category/:categoryId").get(getProductByCategoryId);

router.route("/:id").get(findProductById).delete(deleteProduct);

module.exports = router;
