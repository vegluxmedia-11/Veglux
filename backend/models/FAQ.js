const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  q: {
    type: String,
    required: [true, 'Please add a question']
  },
  a: {
    type: String,
    required: [true, 'Please add an answer']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FAQ', FAQSchema);
