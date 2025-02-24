const express = require('express');
const router = express.Router();

const lineRoute = require('./line/index');

router.use('/line', lineRoute);

module.exports = router;