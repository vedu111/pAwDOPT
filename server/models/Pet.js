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
  shelter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Pet', PetSchema);
