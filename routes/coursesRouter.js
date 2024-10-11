const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Rute untuk mendapatkan semua course
router.get('/', courseController.getAllCourses);

// Rute untuk menambahkan course baru
router.post('/', courseController.addCourse);

// Rute untuk mendapatkan course berdasarkan ID
router.get('/:id', courseController.getCourseById);

// Rute untuk memperbarui course berdasarkan ID
router.put('/:id', courseController.updateCourse);

// Rute untuk menghapus course berdasarkan ID
router.delete('/:id', courseController.deleteCourse);

module.exports = router;