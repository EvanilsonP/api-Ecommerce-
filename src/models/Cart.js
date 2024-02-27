const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    // O carrinho deve conter um ou mais produtos, por isso uma array em products
    products: {
        [
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        ]
    },

    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    address: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    payment: {
        card: {
            number: {
                type: String,
            },

            cvc: {
                type: String,
            }
        }
    }
});

module.exports = mongoose.model('Cart', CartSchema);