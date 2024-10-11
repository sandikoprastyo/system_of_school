const Courses = require('../models/coursesModels');

// Mendapatkan semua kursus
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Courses.findAll(); // Mengambil semua kursus dari database
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data kursus');
    }
};

// Menambahkan kursus baru
exports.addCourse = async (req, res) => {
    try {
        const newCourse = await Courses.create(req.body); // Menyimpan kursus baru
        res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan kursus');
    }
};

// Mendapatkan kursus berdasarkan ID
exports.getCourseById = async (req, res) => {
    const courseId = req.params.id;
    try {
        const courseData = await Courses.findByPk(courseId); // Mencari kursus berdasarkan ID
        if (!courseData) {
            return res.status(404).send('Kursus tidak ditemukan');
        }
        res.status(200).json(courseData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data kursus');
    }
};

// Memperbarui kursus berdasarkan ID
exports.updateCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        const [updated] = await Courses.update(req.body, {
            where: { id: courseId }
        });
        if (updated) {
            const updatedCourse = await Courses.findByPk(courseId);
            res.status(200).json(updatedCourse);
        } else {
            res.status(404).send('Kursus tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui kursus');
    }
};

// Menghapus kursus berdasarkan ID
exports.deleteCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        const deleted = await Courses.destroy({
            where: { id: courseId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Kursus tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus kursus');
    }
};