const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Classes Page');
});

router.post('/', (req, res) => {
  res.send('Create Class');
});

router.get('/:id', (req, res) => {
  res.send(`Class with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Class with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Class with ID ${req.params.id}`);
});

module.exports = router;