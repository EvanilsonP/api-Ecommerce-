const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController/index');
const ProductController = require('../controllers/productController/index');
const LoginController = require('../controllers/login/index');

// Rotas

router.get('/', (req, res) => {
    res.send('Olá!');
});

// Rotas de usuário
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:user_id', UserController.getUserById);
router.post('/login', LoginController.createSession);

// Rotas de produtos
router.post('/products/:user_id', ProductController.createProduct);
router.get('/:user_id/products', ProductController.getUserProducts);
router.patch('/products/:user_id/:product_id', ProductController.updateProduct);
router.delete('/products/:user_id/:product_id', ProductController.deleteProduct);

router.get('/products', ProductController.getProducts);
router.get('/products/:product_id', ProductController.getProductById);


router.post('/cart/:user_id');
router.get('/cart/:user_id')

router.get('/cart/:user_id/:Cart_id');

module.exports = router;