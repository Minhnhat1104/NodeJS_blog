const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/moongose');

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({
      slug: req.params.slug,
    })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [CREATE] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoid}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect('/');
      })
      .catch(() => {});

    res.send('save course');
  }
}

module.exports = new CourseController();
