const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Teachers Page');
});

router.post('/', (req, res) => {
  res.send('Create Teacher');
});

router.get('/:id', (req, res) => {
  res.send(`Teacher with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Teacher with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Teacher with ID ${req.params.id}`);
});

module.exports = router;