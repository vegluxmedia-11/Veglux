const Portfolio = require('../models/Portfolio');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(Portfolio);
exports.getOne = factory.getOne(Portfolio);
exports.createOne = factory.createOne(Portfolio);
exports.updateOne = factory.updateOne(Portfolio);
exports.deleteOne = factory.deleteOne(Portfolio);
