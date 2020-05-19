const router = require('express').Router();
const todoRoutes = require('./todoRoutes');
const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userTodoRoutes');

router.use('/todos', todoRoutes);
router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);

module.exports = router;
