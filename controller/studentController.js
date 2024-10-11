// controllers/studentController.js
const Student = require('../models/Student');

// Mendapatkan semua siswa
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data siswa' });
    }
};

// Menambahkan siswa baru
exports.createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat menambahkan siswa' });
    }
};

// Mendapatkan siswa berdasarkan ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Siswa tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data siswa' });
    }
};
