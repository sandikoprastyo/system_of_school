const express = require('express');
const router = express.Router();
const schedulesController = require('../controllers/schedulesController');

// Route untuk mendapatkan semua schedule
router.get('/', schedulesController.getAllSchedules);

// Route untuk menambahkan schedule baru
router.post('/', schedulesController.addSchedule);

// Route untuk mendapatkan schedule berdasarkan ID
router.get('/:id', schedulesController.getScheduleById);

// Route untuk memperbarui schedule berdasarkan ID
router.put('/:id', schedulesController.updateSchedule);

// Route untuk menghapus schedule berdasarkan ID
router.delete('/:id', schedulesController.deleteSchedule);

module.exports = router;