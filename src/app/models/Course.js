const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoid: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

// mogo tự động convert thành dạng snaking
module.exports = mongoose.model('Course', Course);
// trả về một list gồm các object là các docs của bảng
