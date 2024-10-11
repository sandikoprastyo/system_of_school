const Exam = require('../models/examsModels');

// Mendapatkan semua ujian
exports.getAllExams = async (req, res) => {
    try {
        const exams = await Exam.findAll(); // Mengambil semua ujian dari database
        res.status(200).json(exams);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data ujian');
    }
};

// Menambahkan ujian baru
exports.addExam = async (req, res) => {
    try {
        const newExam = await Exam.create(req.body); // Menyimpan ujian baru
        res.status(201).json(newExam);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan ujian');
    }
};

// Mendapatkan ujian berdasarkan ID
exports.getExamById = async (req, res) => {
    const examId = req.params.id;
    try {
        const exam = await Exam.findByPk(examId); // Mencari ujian berdasarkan ID
        if (!exam) {
            return res.status(404).send('Ujian tidak ditemukan');
        }
        res.status(200).json(exam);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data ujian');
    }
};

// Memperbarui ujian berdasarkan ID
exports.updateExam = async (req, res) => {
    const examId = req.params.id;
    try {
        const [updated] = await Exam.update(req.body, {
            where: { id: examId }
        });
        if (updated) {
            const updatedExam = await Exam.findByPk(examId);
            res.status(200).json(updatedExam);
        } else {
            res.status(404).send('Ujian tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui ujian');
    }
};

// Menghapus ujian berdasarkan ID
exports.deleteExam = async (req, res) => {
    const examId = req.params.id;
    try {
        const deleted = await Exam.destroy({
            where: { id: examId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Ujian tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus ujian');
    }
};