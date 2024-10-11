const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Grades Page');
});

router.post('/', (req, res) => {
  res.send('Create Grade');
});

router.get('/:id', (req, res) => {
  res.send(`Grade with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Grade with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Grade with ID ${req.params.id}`);
});

module.exports = router;