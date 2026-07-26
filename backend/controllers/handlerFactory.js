exports.deleteOne = Model => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return res.status(404).json({ success: false, error: 'No document found with that ID' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateOne = Model => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return res.status(404).json({ success: false, error: 'No document found with that ID' });
    }

    res.status(200).json({ success: true, data: doc });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.createOne = Model => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);
    res.status(201).json({ success: true, data: doc });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const mongoose = require('mongoose');

exports.getOne = Model => async (req, res, next) => {
  try {
    let doc;
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      doc = await Model.findById(req.params.id);
    }
    if (!doc) {
      doc = await Model.findOne({ slug: req.params.id });
    }

    if (!doc) {
      return res.status(404).json({ success: false, error: 'No document found with that ID or slug' });
    }

    res.status(200).json({ success: true, data: doc });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAll = Model => async (req, res, next) => {
  try {
    const doc = await Model.find();
    res.status(200).json({ success: true, count: doc.length, data: doc });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
