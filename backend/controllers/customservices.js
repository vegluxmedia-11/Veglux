const CustomService = require('../models/CustomService');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(CustomService);
exports.getOne = factory.getOne(CustomService);
exports.createOne = factory.createOne(CustomService);
exports.updateOne = factory.updateOne(CustomService);
exports.deleteOne = factory.deleteOne(CustomService);
