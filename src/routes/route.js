const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Olá!');
});

router.post('/users');
router.get('/users');

router.get('/users/:user_id');

router.post('/login');

router.post('/products/:user_id');
router.get('/products/user_id');
router.patch('/products/:user_id/:product_id');
router.delete('/products/:user_id/:product_id');

router.get('/products');
router.get('/products/:product_id');


router.post('/cart/:user_id');
router.get('/cart/:user_id')

router.get('/cart/:user_id/:Cart_id');

module.exports = router;