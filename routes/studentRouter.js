// studentRouter.js
const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentController');

// Rute untuk mendapatkan semua siswa
router.get('/', studentsController.getAllStudents);

// Rute untuk menambahkan siswa baru
router.post('/', studentsController.addStudent);

// Rute untuk mendapatkan siswa berdasarkan ID
router.get('/:id', studentsController.getStudentById);

// Rute untuk memperbarui siswa berdasarkan ID
router.put('/:id', studentsController.updateStudent);

// Rute untuk menghapus siswa berdasarkan ID
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
