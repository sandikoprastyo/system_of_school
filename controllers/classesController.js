const Classes = require('../models/classesModels');

// Mendapatkan semua kelas
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Classes.findAll(); // Mengambil semua kelas dari database
        res.status(200).json(classes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data kelas');
    }
};

// Menambahkan kelas baru
exports.addClass = async (req, res) => {
    try {
        const newClass = await Classes.create(req.body); // Menyimpan kelas baru
        res.status(201).json(newClass);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan kelas');
    }
};

// Mendapatkan kelas berdasarkan ID
exports.getClassById = async (req, res) => {
    const classId = req.params.id;
    try {
        const classData = await Classes.findByPk(classId); // Mencari kelas berdasarkan ID
        if (!classData) {
            return res.status(404).send('Kelas tidak ditemukan');
        }
        res.status(200).json(classData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data kelas');
    }
};

// Memperbarui kelas berdasarkan ID
exports.updateClass = async (req, res) => {
    const classId = req.params.id;
    try {
        const [updated] = await Classes.update(req.body, {
            where: { id: classId }
        });
        if (updated) {
            const updatedClass = await Classes.findByPk(classId);
            res.status(200).json(updatedClass);
        } else {
            res.status(404).send('Kelas tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui kelas');
    }
};

// Menghapus kelas berdasarkan ID
exports.deleteClass = async (req, res) => {
    const classId = req.params.id;
    try {
        const deleted = await Classes.destroy({
            where: { id: classId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Kelas tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus kelas');
    }
};