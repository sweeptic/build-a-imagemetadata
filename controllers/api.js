const mongoose = require('mongoose');

exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello from fcc-file-metadata-service' });
};

exports.fileanalyse = (req, res, next) => {
  res.json({ message: 'file analyze api' });
};
