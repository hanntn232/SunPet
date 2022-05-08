const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    _id: { type: String },
    customerID: { type: String, required: true },
    sdt: { type: String, required: true },
    diaChi: { type: String, required: true },
    products: {
        type: [{
            productID: { type: String, required: true },
            ten: { type: String, required: true },
            giaBan: { type: Number, required: true }
        }],
        required: true
    },
    status: { type: String, required: true },
    tongGiaTriHangHoa: { type: Number, required: true },
    shipCost: { type: Number, required: true },
    thanhTien: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("orders", OrderSchema)