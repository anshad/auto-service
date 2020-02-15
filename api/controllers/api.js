const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ doc: 'https://github.com/anshad/auto-service' });
});

module.exports = router;
