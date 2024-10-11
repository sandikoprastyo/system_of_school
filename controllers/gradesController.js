const Grade = require('../models/gradesModels');

// Mendapatkan semua nilai
exports.getAllGrades = async (req, res) => {
    try {
        const grades = await Grade.findAll(); // Mengambil semua nilai dari database
        res.status(200).json(grades);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data nilai');
    }
};

// Menambahkan nilai baru
exports.addGrade = async (req, res) => {
    try {
        const newGrade = await Grade.create(req.body); // Menyimpan nilai baru
        res.status(201).json(newGrade);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan nilai');
    }
};

// Mendapatkan nilai berdasarkan ID
exports.getGradeById = async (req, res) => {
    const gradeId = req.params.id;
    try {
        const grade = await Grade.findByPk(gradeId); // Mencari nilai berdasarkan ID
        if (!grade) {
            return res.status(404).send('Nilai tidak ditemukan');
        }
        res.status(200).json(grade);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data nilai');
    }
};

// Memperbarui nilai berdasarkan ID
exports.updateGrade = async (req, res) => {
    const gradeId = req.params.id;
    try {
        const [updated] = await Grade.update(req.body, {
            where: { id: gradeId }
        });
        if (updated) {
            const updatedGrade = await Grade.findByPk(gradeId);
            res.status(200).json(updatedGrade);
        } else {
            res.status(404).send('Nilai tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui nilai');
    }
};

// Menghapus nilai berdasarkan ID
exports.deleteGrade = async (req, res) => {
    const gradeId = req.params.id;
    try {
        const deleted = await Grade.destroy({
            where: { id: gradeId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Nilai tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus nilai');
    }
};