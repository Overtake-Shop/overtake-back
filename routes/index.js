const express = require('express');
const router = express.Router();

const productsRoutes = require('./product.route')

router.use('/product', productsRoutes)

module.exports = router;