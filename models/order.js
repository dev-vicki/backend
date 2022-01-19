const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    products: [ProductInCartSchema],
    transaction_id: {},
    amount: {type: Number},
    Address: String,
    update: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true}
);

const Order = mongoose.model("Oder", OrderSchema);


// these are the no of items in user's cart
const ProductInCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const ProductCart = mongoose.model("ProductCart", ProductInCartSchema);

module.exports = {Order, ProductCart};