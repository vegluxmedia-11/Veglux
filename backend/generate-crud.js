const fs = require('fs');
const path = require('path');

const models = ['Portfolio', 'Service', 'Testimonial', 'PricingPlan', 'Lead', 'FAQ'];

models.forEach(model => {
  const lowerName = model.toLowerCase() + 's';
  const controllerCode = `const ${model} = require('../models/${model}');
const factory = require('./handlerFactory');

exports.getAll = factory.getAll(${model});
exports.getOne = factory.getOne(${model});
exports.createOne = factory.createOne(${model});
exports.updateOne = factory.updateOne(${model});
exports.deleteOne = factory.deleteOne(${model});
`;

  const routeCode = `const express = require('express');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require('../controllers/${lowerName}');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(getAll)
  .post(protect, createOne);

router
  .route('/:id')
  .get(getOne)
  .put(protect, updateOne)
  .delete(protect, deleteOne);

module.exports = router;
`;

  fs.writeFileSync(path.join(__dirname, 'controllers', `${lowerName}.js`), controllerCode);
  fs.writeFileSync(path.join(__dirname, 'routes', `${lowerName}.js`), routeCode);
});
console.log('CRUD Controllers and Routes generated successfully!');
