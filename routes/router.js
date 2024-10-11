const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

// Import semua router
const studentsRouter = require('./studentRouter');
const teachersRouter = require('./teachersRouter');
const coursesRouter = require('./coursesRouter');
const classesRouter = require('./classesRouter');
const gradesRouter = require('./gradesRouter');
const attendancesRouter = require('./attendanceRouter');
const examsRouter = require('./examsRouter');
const schedulesRouter = require('./schedulesRouter');

// Gunakan router sesuai endpoint
router.use('/students', authenticate, studentsRouter);
router.use('/teachers', authenticate, teachersRouter);
router.use('/courses', authenticate, coursesRouter);
router.use('/classes', authenticate, classesRouter);
router.use('/grades', authenticate, gradesRouter);
router.use('/exams', authenticate, examsRouter);
router.use('/attendances', authenticate, attendancesRouter);
router.use('/schedules', authenticate, schedulesRouter)


module.exports = router;
