const Service = require('../models/Service');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(Service);
exports.getOne = factory.getOne(Service);
exports.createOne = factory.createOne(Service);
exports.updateOne = factory.updateOne(Service);
exports.deleteOne = factory.deleteOne(Service);
