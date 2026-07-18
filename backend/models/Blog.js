const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title can not be more than 100 characters']
  },
  slug: {
    type: String,
    unique: true
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  excerpt: {
    type: String,
    maxlength: [200, 'Excerpt can not be more than 200 characters']
  },
  author: {
    type: String,
    default: 'Veglux Admin'
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create slug from title before saving
BlogSchema.pre('save', function(next) {
  if(this.title && !this.slug) {
    this.slug = this.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  }
  next();
});

module.exports = mongoose.model('Blog', BlogSchema);
