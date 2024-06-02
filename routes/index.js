const express = require('express');
const productsRoutes = require('./product.route')

const router = express.Router();

router.use('/product', productsRoutes)