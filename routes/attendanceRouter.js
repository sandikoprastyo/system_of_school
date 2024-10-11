const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Rute untuk mendapatkan semua siswa
router.get('/', attendanceController.getAllAttendances);

// Rute untuk menambahkan siswa baru
router.post('/', attendanceController.addAttendance);

// Rute untuk mendapatkan siswa berdasarkan ID
router.get('/:id', attendanceController.getAttendanceById);

// Rute untuk memperbarui siswa berdasarkan ID
router.put('/:id', attendanceController.updateAttendance);

// Rute untuk menghapus siswa berdasarkan ID
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;
