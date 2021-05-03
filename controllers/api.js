const mongoose = require('mongoose');

exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello from fcc-file-metadata-service' });
};

exports.fileanalyse = (req, res, next) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
};
