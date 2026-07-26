const mongoose = require('mongoose');

const CustomServiceSchema = new mongoose.Schema({
  idName: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Please add service name']
  },
  desc: {
    type: String,
    required: [true, 'Please add service description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a numeric price']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CustomService', CustomServiceSchema);
