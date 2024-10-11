const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Attendance Page');
});

router.post('/', (req, res) => {
  res.send('Create Attendance');
});

router.get('/:id', (req, res) => {
  res.send(`Attendance with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Attendance with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Attendance with ID ${req.params.id}`);
});

module.exports = router;

