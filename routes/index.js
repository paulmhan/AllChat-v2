const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const path = require("path");

router.use('/api', apiRoutes);

    
module.exports = router;
