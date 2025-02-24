const express = require('express');
const router = express.Router();

const messageRoute = require('./message');

router.use('/message', messageRoute);

module.exports = router;