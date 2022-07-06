const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/moongose');

class SiteController {
  // [GET]
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if(!err) {
    //     res.json(courses)
    //   } else {
    //     res.status(400).json({ error: 'ERROR!!!' })
    //   }
    // });

    Course.find({})
      .then((courses) => {
        res.render('search', { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  //[GET]/search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
