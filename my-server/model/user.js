const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    _id: { type: String },
    role: { type: String, required: true },
    ho: { type: String, required: true },
    ten: { type: String, required: true },
    sdt: { type: String, required: true },
    diaChi: { type: String, required: true },
    matKhau: { type: String, required: true },
    token: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("User", UserSchema)