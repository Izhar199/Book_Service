const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, enum: ['available', 'checked-out'], default: 'available' },
    publishedDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
