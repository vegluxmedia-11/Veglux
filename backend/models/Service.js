const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a service title']
  },
  category: {
    type: String,
    enum: ['performance', 'social', 'tech', 'branding'],
    required: true
  },
  desc: {
    type: String,
    required: [true, 'Please add a description']
  },
  icon: {
    type: String, // SVG path string or name
    default: 'default-icon'
  },
  subservices: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
