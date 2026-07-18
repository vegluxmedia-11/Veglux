const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email']
  },
  phone: String,
  company: String,
  service: {
    type: String,
    enum: ['performance', 'social', 'seo', 'webdev', 'branding'],
    default: 'performance'
  },
  message: {
    type: String,
    required: [true, 'Please add a message/description']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'closed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lead', LeadSchema);
