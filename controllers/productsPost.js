const Product = require("../models/product");

const createProduct = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        const newProduct = await Product.create(req.body);
        res.status(201).json({ product: newProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Error creating product" });
    }
}

module.exports = {
    createProduct,
};
