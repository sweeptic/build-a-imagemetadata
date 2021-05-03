const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  size: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Image', imageSchema);
