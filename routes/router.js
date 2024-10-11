const express = require('express');
const router = express.Router();

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
router.use('/students', studentsRouter);
router.use('/teachers', teachersRouter);
router.use('/courses', coursesRouter);
router.use('/classes', classesRouter);
router.use('/grades', gradesRouter);
router.use('/exams', examsRouter);
router.use('/attendances', attendancesRouter);
router.use('/schedules', schedulesRouter)


module.exports = router;
