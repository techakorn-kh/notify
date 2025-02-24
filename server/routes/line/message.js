const express = require('express');
const router = express.Router();

const lineMessageAPI = require('../../controllers/lineMessageAPI/messageAPI');

router.post('/message/push', lineMessageAPI.messagePush);

module.exports = router;