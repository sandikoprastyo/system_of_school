const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classesController');

// Rute untuk mendapatkan semua siswa
router.get('/', classesController.getAllClasses);

// Rute untuk menambahkan siswa baru
router.post('/', classesController.addClass);

// Rute untuk mendapatkan siswa berdasarkan ID
router.get('/:id', classesController.getClassById);

// Rute untuk memperbarui siswa berdasarkan ID
router.put('/:id', classesController.updateClass);

// Rute untuk menghapus siswa berdasarkan ID
router.delete('/:id', classesController.deleteClass);

module.exports = router;
