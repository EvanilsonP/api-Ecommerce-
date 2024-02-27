const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },

    productDescription: {
        type: String,
    },

    productPrice: {
        type: Number,
        required: true
    },

    productQuantity: {
        type: String,
        required: true
    },

    productImage: {
        type: String
    },

    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

module.exports = mongoose.model('Product', ProductSchema);