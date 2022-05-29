const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
    date: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model("blogs", BlogSchema)