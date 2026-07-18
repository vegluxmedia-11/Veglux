const Testimonial = require('../models/Testimonial');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(Testimonial);
exports.getOne = factory.getOne(Testimonial);
exports.createOne = factory.createOne(Testimonial);
exports.updateOne = factory.updateOne(Testimonial);
exports.deleteOne = factory.deleteOne(Testimonial);
