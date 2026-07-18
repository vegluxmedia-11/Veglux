const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'video'],
    default: 'text'
  },
  name: {
    type: String,
    required: [true, 'Please add client name']
  },
  company: {
    type: String
  },
  
  // Fields for text testimonials
  text: {
    type: String
  },
  stars: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  initials: {
    type: String
  },

  // Fields for video testimonials
  subtitles: {
    type: [String]
  },
  videoUrl: {
    type: String
  },
  
  image: {
    type: String,
    default: 'no-avatar.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
