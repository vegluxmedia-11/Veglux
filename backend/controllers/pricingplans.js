const PricingPlan = require('../models/PricingPlan');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(PricingPlan);
exports.getOne = factory.getOne(PricingPlan);
exports.createOne = factory.createOne(PricingPlan);
exports.updateOne = factory.updateOne(PricingPlan);
exports.deleteOne = factory.deleteOne(PricingPlan);
