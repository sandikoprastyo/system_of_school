const Teacher = require('../models/teachersModels');

// Mendapatkan semua guru
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll(); // Mengambil semua guru dari database
        res.status(200).json(teachers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data guru');
    }
};

// Menambahkan guru baru
exports.addTeacher = async (req, res) => {
    try {
        const newTeacher = await Teacher.create(req.body); // Menyimpan guru baru
        res.status(201).json(newTeacher);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan guru');
    }
};

// Mendapatkan guru berdasarkan ID
exports.getTeacherById = async (req, res) => {
    const teacherId = req.params.id;
    try {
        const teacher = await Teacher.findByPk(teacherId); // Mencari guru berdasarkan ID
        if (!teacher) {
            return res.status(404).send('Guru tidak ditemukan');
        }
        res.status(200).json(teacher);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data guru');
    }
};

// Memperbarui guru berdasarkan ID
exports.updateTeacher = async (req, res) => {
    const teacherId = req.params.id;
    try {
        const [updated] = await Teacher.update(req.body, {
            where: { id: teacherId }
        });
        if (updated) {
            const updatedTeacher = await Teacher.findByPk(teacherId);
            res.status(200).json(updatedTeacher);
        } else {
            res.status(404).send('Guru tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui guru');
    }
};

// Menghapus guru berdasarkan ID
exports.deleteTeacher = async (req, res) => {
    const teacherId = req.params.id;
    try {
        const deleted = await Teacher.destroy({
            where: { id: teacherId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Guru tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus guru');
    }
};