const Cart = require('../../models/Cart');

const CartController = {

    async createCart(req, res) {
        const bodyData = req.body;
        const { user_id } = req.params;

        try {
            const createdCart = await Cart.create({...bodyData, username: user_id});
            return res.status(201).json(createdCart);

        } 

        catch (error) {
            return res.status(400).json(error);
        }
    },

    async getUserCarts(req, res) {
        const { user_id } = req.params;

        try {
            const userCarts = await Cart.find({ username: user_id }).populate('products'); // Populate mostra as informações dos produtos listados no cart pelo usuário. Sem populate teremos apena os ID's dos produtos
            return res.status(200).json(userCarts);
        } 

        catch (error) {
            return res.status(400).json(error);
        }
    },

    async getCart(req, res) {
        const { cart_id } = req.params;

        try {
            const cart = await Cart.findById(cart_id).populate('products');
            res.status(200).json(cart);
        } 

        catch (error) {
            return res.status(400).json(error);
        }
    }
};

module.exports = CartController;