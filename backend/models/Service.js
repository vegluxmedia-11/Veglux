const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a service title']
  },
  slug: {
    type: String,
    unique: true
  },
  category: {
    type: String,
    enum: ['performance', 'social', 'tech', 'branding'],
    required: true
  },
  categoryLabel: {
    type: String,
    default: ''
  },
  tagline: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'default-icon'
  },
  subservices: {
    type: [String],
    default: []
  },
  heroMetrics: [
    {
      label: { type: String },
      value: { type: String }
    }
  ],
  overview: {
    type: String,
    default: ''
  },
  whyItMatters: {
    type: [String],
    default: []
  },
  pillars: [
    {
      title: { type: String },
      desc: { type: String },
      deliverables: { type: [String], default: [] }
    }
  ],
  process: [
    {
      step: { type: String },
      title: { type: String },
      desc: { type: String }
    }
  ],
  technologies: {
    type: [String],
    default: []
  },
  faqs: [
    {
      q: { type: String },
      a: { type: String }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Auto-generate slug from title if missing
ServiceSchema.pre('save', function(next) {
  if (this.title && !this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }
  next();
});

module.exports = mongoose.model('Service', ServiceSchema);
