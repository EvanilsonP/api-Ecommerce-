const Product = require('../../models/Product');

const ProductController = {

    async createProduct(req, res) {
        const bodyData = req.body;
        const { user_id } = req.params;

        try {
            const newProduct = await Product.create({ username: user_id, ...bodyData});
            return res.status(201).json(newProduct);
        } 
        catch (error) {
            res.status(400).json(error);
        }
    },

    async getUserProducts(req, res) {
        const { user_id } = req.params;
        try {
            const productsOfAnUser = await Product.find({ username: user_id });
            return res.status(201).json(productsOfAnUser);
        } 
        catch (error) {
            res.status(400).json(error);
        }
    },

    async updateProduct(req, res) {
        const bodyData = req.body;
        const { product_id } = req.params;

        try {
            const updatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true });
            return res.status(201).json(updatedProduct);
        } 
        catch (error) {
            res.status(400).json(error);
        }
    },

    async deleteProduct(req, res) {
        const { product_id } = req.params;

        try {
            await Product.findByIdAndDelete(product_id);
            return res.status(201).json({ message: "Produto Deletado."});
        } 

        catch (error) {
            res.status(400).json(error);
        }
    },

    async getProducts(req, res) {
        try {
            const products = await Product.find();
            return res.status(201).json(products);
        } 

        catch (error) {
            res.status(400).json(error);
        }
    },

    async getProductById(req, res) {
        const { product_id } = req.params;

        try {
            const product = await Product.findById(product_id);
            return res.status(201).json(product);
        } 

        catch (error) {
            res.status(400).json(error);
        }
    },
};

module.exports = ProductController;
