const Product = require('../models/product.model')

exports.getProducts = async (req, res, next) => {
    Product.find()
    .then((products) => {
        let productArr = [];
        products.forEach((data) => {
            data.push(productArr)
        })
        res.send(productArr)
    }).catch((err)=> {
        console.log(err)
        next
    })
}
