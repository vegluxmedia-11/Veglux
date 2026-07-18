const express = require('express');
const {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne
} = require('../controllers/testimonials');
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
