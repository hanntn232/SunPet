const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    _id: { type: String },
    customerID: { type: String, required: true },
    productList: {
        type: [{
            productID: { type: String, required: true },
            quantity: { type: Number, required: true }
        }]
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("carts", CartSchema)