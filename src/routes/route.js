const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController/index');
const ProductController = require('../controllers/productController/index');
const CartController = require('../controllers/cartController/index');
const LoginController = require('../controllers/login/index');
const { authenticate, checkUserId } = require('../middlewares/index');

// Rota Home Page
router.get('/', (req, res) => {
    res.send('Olá!');
});

// Rotas de usuário
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/user/:user_id', checkUserId, UserController.getUserById);
router.post('/login', LoginController.createSession);

// Rotas de produtos
router.post('/products/:user_id', authenticate, ProductController.createProduct);
router.get('/:user_id/products', ProductController.getUserProducts);
router.patch('/products/:user_id/:product_id', authenticate,ProductController.updateProduct);
router.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct);

router.get('/products', ProductController.getProducts);
router.get('/products/:product_id', ProductController.getProductById);

// Rotas cart
router.post('/carts/:user_id', authenticate, CartController.createCart);
router.get('/carts/:user_id', authenticate, CartController.getUserCarts);
router.get('/carts/:user_id/:cart_id', authenticate, CartController.getCart);

module.exports = router;