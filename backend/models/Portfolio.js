const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a project title']
  },
  tag: {
    type: String,
    required: [true, 'Please add a tag']
  },
  desc: {
    type: String,
    required: [true, 'Please add a description']
  },
  roi: {
    type: String,
    required: [true, 'Please add ROI e.g. 8.5x ROAS']
  },
  stats: [{
    label: { type: String, required: true },
    value: { type: String, required: true }
  }],
  chartHeights: {
    type: [Number],
    required: true
  },
  image: {
    type: String,
    default: 'no-image.jpg'
  },
  link: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
