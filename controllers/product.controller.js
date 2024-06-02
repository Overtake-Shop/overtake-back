const Product = require('../')

exports.getProducts = async (req, res, next) => {
    Product.findAll()
    .then((products) => {
        res.send(products)
    }).catch((err)=> {
        console.log(err)
        next
    })
}