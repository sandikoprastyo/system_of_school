const Schedule = require('../models/schedulesModels');

// Mendapatkan semua jadwal
exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.findAll(); // Mengambil semua jadwal dari database
        res.status(200).json(schedules);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data jadwal');
    }
};

// Menambahkan jadwal baru
exports.addSchedule = async (req, res) => {
    try {
        const newSchedule = await Schedule.create(req.body); // Menyimpan jadwal baru
        res.status(201).json(newSchedule);
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal menambahkan jadwal');
    }
};

// Mendapatkan jadwal berdasarkan ID
exports.getScheduleById = async (req, res) => {
    const scheduleId = req.params.id;
    try {
        const schedule = await Schedule.findByPk(scheduleId); // Mencari jadwal berdasarkan ID
        if (!schedule) {
            return res.status(404).send('Jadwal tidak ditemukan');
        }
        res.status(200).json(schedule);
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mengambil data jadwal');
    }
};

// Memperbarui jadwal berdasarkan ID
exports.updateSchedule = async (req, res) => {
    const scheduleId = req.params.id;
    try {
        const [updated] = await Schedule.update(req.body, {
            where: { id: scheduleId }
        });
        if (updated) {
            const updatedSchedule = await Schedule.findByPk(scheduleId);
            res.status(200).json(updatedSchedule);
        } else {
            res.status(404).send('Jadwal tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Gagal memperbarui jadwal');
    }
};

// Menghapus jadwal berdasarkan ID
exports.deleteSchedule = async (req, res) => {
    const scheduleId = req.params.id;
    try {
        const deleted = await Schedule.destroy({
            where: { id: scheduleId }
        });
        if (deleted) {
            res.status(204).send(); // Berhasil dihapus
        } else {
            res.status(404).send('Jadwal tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat menghapus jadwal');
    }
};