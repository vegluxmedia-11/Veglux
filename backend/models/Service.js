const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a service title']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  icon: {
    type: String, // icon class or image path
    default: 'default-icon'
  },
  features: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
