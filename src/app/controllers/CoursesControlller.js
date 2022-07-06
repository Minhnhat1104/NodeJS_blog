const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/moongose');

class CoursesController {
  // [GET] /courses/:slug
  index(req, res, next) {
    Course.findOne({
      slug: req.params.slug,
    })
      .then((course) => {
        console.log(course);
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
