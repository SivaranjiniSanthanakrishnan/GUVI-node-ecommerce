const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        maxLength: 25,
        enum: ["TV", "Televison", "Mobile", "Laptop"]
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    userQuantity: {
        type: Number,
        required: true,
        default: 0
    }
})

const Product = mongoose.model('Product', productSchema, 'product');
module.exports = Product;