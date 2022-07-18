const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoid: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    _id: false,
    timestamps: true,
  },
);

//plugins

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
});

Course.plugin(AutoIncrement);

// mogo tự động convert thành dạng snaking
module.exports = mongoose.model('Course', Course);
// trả về một list gồm các object là các docs của bảng
