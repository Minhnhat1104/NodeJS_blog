const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/moongose');

class CoursesController {
  // [GET]
  index(req, res, next) {
    Course.find({})
      .then((course) => {
        res.render('courses/show', {
          course: multipleMongooseToObject(course),
        });
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
