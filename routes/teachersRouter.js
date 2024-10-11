const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');

// Route untuk mendapatkan semua teacher
router.get('/', teachersController.getAllTeachers);

// Route untuk menambahkan teacher baru
router.post('/', teachersController.addTeacher);

// Route untuk mendapatkan teacher berdasarkan ID
router.get('/:id', teachersController.getTeacherById);

// Route untuk memperbarui teacher berdasarkan ID
router.put('/:id', teachersController.updateTeacher);

// Route untuk menghapus teacher berdasarkan ID
router.delete('/:id', teachersController.deleteTeacher);

module.exports = router;