const mongoose = require('mongoose');

exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello from fcc-exercise-tracker' });
};
