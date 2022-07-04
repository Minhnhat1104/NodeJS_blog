const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, default: '', maxLength: 255 },
  description: { type: String, default: '', maxLength: 600 },
  image: { type: String, default: '', maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// mogo tự động convert thành dạng snaking
module.exports = mongoose.model('Course', Course);