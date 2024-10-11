const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Courses Page');
});

router.post('/', (req, res) => {
  res.send('Create Course');
});

router.get('/:id', (req, res) => {
  res.send(`Course with ID ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Update Course with ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Delete Course with ID ${req.params.id}`);
});

module.exports = router;