const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/moongose');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    const coursesQuery = Course.find({});

    if (req.query.hasOwnProperty('_sort')) {
      coursesQuery.sort({ [req.query.column]: req.query.type });
    }

    Promise.all([Course.countDocumentsDeleted(), coursesQuery])
      .then(([number, courses]) => {
        res.render('me/stored-courses', {
          number,
          courses: multipleMongooseToObject(courses).map((v) => ({
            ...v,
            createdAt: new Date(v?.createdAt).toDateString(),
          })),
        });
      })
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses).map((v) => ({
            ...v,
            createdAt: new Date(v?.createdAt).toDateString(),
          })),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
