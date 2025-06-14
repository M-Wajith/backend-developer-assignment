const Product = require('../models/Product');

exports.createProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({message:"Product created successfully",product});
    }
    catch(err){
        res.status(401).json({error: err.message});
    }
};

exports.getAllProducts = async (req,res) => {
    const products = await Product.find();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product) res.json(product);
    else res.status(401).json({message: 'Product not found'});
};

exports.updateProduct = async (req,res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(updated) res.json(updated);
    else res.status(401).json({message: "Product not found"});
};

exports.deleteProduct = async (req,res) => {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if(deleted) res.json({message: "Product deleted "});
    else res.status(401).json({message: "Product not found"});
};