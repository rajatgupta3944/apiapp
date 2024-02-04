const express = require("express");
const router = express.Router();

const {getAllProducts, getAllProductsTesting} = require("../controllers/products");
const {createProduct} = require("../controllers/productsPost")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.post("/", createProduct);

module.exports = router;