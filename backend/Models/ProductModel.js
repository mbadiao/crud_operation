const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    ProductType: {
        type: String,
        required: true
    },
    ProductPrice: {
        type: Number,
        required: true
    },
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema)