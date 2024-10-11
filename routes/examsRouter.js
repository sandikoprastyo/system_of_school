const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Exams Page');
});

router.post('/', (req, res) => {
  res.send('Create Exam');
});

router.get('/:id', (req, res) => {
  res.send(`Exam with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Exam with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Exam with ID ${req.params.id}`);
});

module.exports = router;