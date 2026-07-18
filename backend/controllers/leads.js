const Lead = require('../models/Lead');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(Lead);
exports.getOne = factory.getOne(Lead);
exports.createOne = factory.createOne(Lead);
exports.updateOne = factory.updateOne(Lead);
exports.deleteOne = factory.deleteOne(Lead);
