const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    id: { type: String },
    name: { type: String, required: true },
    task: { type: String, required: true },
    level: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Todo", TodoSchema);