const router = require('express').Router();

const { translateMessage } = require('./../../../controllers/messageController')

router.post('/message', translateMessage)

module.exports = router;