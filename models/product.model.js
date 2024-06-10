const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    colors : { type: mongoose.Schema.Types.ObjectId},
    variants : { type: mongoose.Schema.Types.ObjectId},
})