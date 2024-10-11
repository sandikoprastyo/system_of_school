// controllers/studentController.js
const Student = require('../models/studentsModel');

// Mendapatkan semua siswa
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll(); // Mengambil semua siswa dari database
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data siswa');
    }
};

// Menambahkan siswa baru
exports.addStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body); // Menyimpan siswa baru
        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan siswa');
    }
};

// Mendapatkan siswa berdasarkan ID
exports.getStudentById = async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await Student.findByPk(studentId); // Mencari siswa berdasarkan ID
        if (!student) {
            return res.status(404).send('Siswa tidak ditemukan');
        }
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data siswa');
    }
};

// Memperbarui siswa berdasarkan ID
exports.updateStudent = async (req, res) => {
    const studentId = req.params.id;
    try {
        const [updated] = await Student.update(req.body, {
            where: { id: studentId }
        });
        if (updated) {
            const updatedStudent = await Student.findByPk(studentId);
            res.status(200).json(updatedStudent);
        } else {
            res.status(404).send('Siswa tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui siswa');
    }
};

// Menghapus siswa berdasarkan ID
exports.deleteStudent = async (req, res) => {
    const studentId = req.params.id;
    try {
        const deleted = await Student.destroy({
            where: { id: studentId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Siswa tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus siswa');
    }
};
