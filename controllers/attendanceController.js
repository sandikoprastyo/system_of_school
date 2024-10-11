const Attendance = require('../models/attendanceModels');

// Mendapatkan semua kehadiran
exports.getAllAttendances = async (req, res) => {
    try {
        const attendances = await Attendance.findAll(); // Mengambil semua kehadiran dari database
        res.status(200).json(attendances);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data kehadiran');
    }
};

// Menambahkan kehadiran baru
exports.addAttendance = async (req, res) => {
    try {
        const newAttendance = await Attendance.create(req.body); // Menyimpan kehadiran baru
        res.status(201).json(newAttendance);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan kehadiran');
    }
};

// Mendapatkan kehadiran berdasarkan ID
exports.getAttendanceById = async (req, res) => {
    const attendanceId = req.params.id;
    try {
        const attendance = await Attendance.findByPk(attendanceId); // Mencari kehadiran berdasarkan ID
        if (!attendance) {
            return res.status(404).send('Kehadiran tidak ditemukan');
        }
        res.status(200).json(attendance);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data kehadiran');
    }
};

// Memperbarui kehadiran berdasarkan ID
exports.updateAttendance = async (req, res) => {
    const attendanceId = req.params.id;
    try {
        const [updated] = await Attendance.update(req.body, {
            where: { id: attendanceId }
        });
        if (updated) {
            const updatedAttendance = await Attendance.findByPk(attendanceId);
            res.status(200).json(updatedAttendance);
        } else {
            res.status(404).send('Kehadiran tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui kehadiran');
    }
};

// Menghapus kehadiran berdasarkan ID
exports.deleteAttendance = async (req, res) => {
    const attendanceId = req.params.id;
    try {
        const deleted = await Attendance.destroy({
            where: { id: attendanceId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Kehadiran tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus kehadiran');
    }
};