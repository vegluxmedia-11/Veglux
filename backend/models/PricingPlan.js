const mongoose = require('mongoose');

const PricingPlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a plan title (e.g. Starter, Premium)']
  },
  desc: {
    type: String,
    required: [true, 'Please add a short description']
  },
  price: {
    type: String,
    required: [true, 'Please add a price string (e.g. ₹25,000)']
  },
  featured: {
    type: Boolean,
    default: false
  },
  ctaText: {
    type: String,
    default: 'Get Started'
  },
  features: [{
    name: { type: String, required: true },
    included: { type: Boolean, default: true }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PricingPlan', PricingPlanSchema);
