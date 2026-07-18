const mongoose = require('mongoose');

const PricingPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a plan name (e.g. Basic, Pro)']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  currency: {
    type: String,
    default: '$'
  },
  features: {
    type: [String],
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PricingPlan', PricingPlanSchema);
