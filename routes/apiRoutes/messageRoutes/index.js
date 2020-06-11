const router = require('express').Router();

const { translateMessage } = require('./../../../controllers/messageController')

router.get('/message', translateMessage)

module.exports = router;