const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesControlller');

router.get('/:slug', coursesController.index);

module.exports = router;
