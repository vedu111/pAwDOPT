const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'other'],
  },
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String], 
  },
  healthInfo: {
    type: String,
    required: true,
  },
  compatibility: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pet', PetSchema);
