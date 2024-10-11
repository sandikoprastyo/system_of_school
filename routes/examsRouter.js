const express = require('express');
const router = express.Router();
const examsController = require('../controllers/examsController');

// Route untuk mendapatkan semua exam
router.get('/', examsController.getAllExams);

// Route untuk menambahkan exam baru
router.post('/', examsController.addExam);

// Route untuk mendapatkan exam berdasarkan ID
router.get('/:id', examsController.getExamById);

// Route untuk memperbarui exam berdasarkan ID
router.put('/:id', examsController.updateExam);

// Route untuk menghapus exam berdasarkan ID
router.delete('/:id', examsController.deleteExam);

module.exports = router;