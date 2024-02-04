const Product = require("../models/product")

const getAllProducts = async (req, res) => {
    const {company, name, featured} = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex:name, $options:"i"};//not strict mode
        // queryObject.name = name;//strict mode
    }
    if(featured){
        queryObject.featured = featured;
    }
    console.log(queryObject)
    // const myData = await Product.find(req.query);
    const myData = await Product.find(queryObject);
    res.status(200).json({ myData })
}
const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData })
}

module.exports = {getAllProducts, getAllProductsTesting};