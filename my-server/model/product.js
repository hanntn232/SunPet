const mogoose = require('mongoose')
const Schema = mogoose.Schema;
const ProductSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    id: { type: String },
    ten: { type: String, required: true },
    giaGoc: { type: Number },
    giaBan: { type: Number, required: true },
    danhMuc: { type: String, required: true },
    hinhAnh: { type: Array, required: true },
    moTa: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})

module.exports = mogoose.model("Product", ProductSchema)