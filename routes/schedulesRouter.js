const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Schedules Page');
});

router.post('/', (req, res) => {
  res.send('Create Schedule');
});

router.get('/:id', (req, res) => {
  res.send(`Schedule with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Schedule with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Schedule with ID ${req.params.id}`);
});

module.exports = router;