const FAQ = require('../models/FAQ');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(FAQ);
exports.getOne = factory.getOne(FAQ);
exports.createOne = factory.createOne(FAQ);
exports.updateOne = factory.updateOne(FAQ);
exports.deleteOne = factory.deleteOne(FAQ);
