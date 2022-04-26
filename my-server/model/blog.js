const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    id: { type: String },
    date: { type: String },
    title: { type: String, required: true },
    content: { type: Object, required: true },
    image: { type: Object },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("blogs", BlogSchema)