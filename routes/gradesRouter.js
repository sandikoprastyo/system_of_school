const express = require('express');
const router = express.Router();
const gradesController = require('../controllers/gradesController');

// Route untuk mendapatkan semua grade
router.get('/', gradesController.getAllGrades);

// Route untuk menambahkan grade baru
router.post('/', gradesController.addGrade);

// Route untuk mendapatkan grade berdasarkan ID
router.get('/:id', gradesController.getGradeById);

// Route untuk memperbarui grade berdasarkan ID
router.put('/:id', gradesController.updateGrade);

// Route untuk menghapus grade berdasarkan ID
router.delete('/:id', gradesController.deleteGrade);

module.exports = router;