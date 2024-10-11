// studentRouter.js
const express = require('express');
const router = express.Router();

// Contoh rute untuk mendapatkan semua siswa
router.get('/', (req, res) => {
    res.send('Daftar semua siswa');
});

// Contoh rute untuk menambahkan siswa baru
router.post('/', (req, res) => {
    const newStudent = req.body; // Misalnya Anda mengirimkan data siswa dalam body
    // Logika untuk menyimpan siswa baru
    res.status(201).send('Siswa baru ditambahkan');
});

// Contoh rute untuk mendapatkan siswa berdasarkan ID
router.get('/:id', (req, res) => {
    const studentId = req.params.id;
    // Logika untuk mendapatkan siswa berdasarkan ID
    res.send(`Detail siswa dengan ID ${studentId}`);
});

module.exports = router;
