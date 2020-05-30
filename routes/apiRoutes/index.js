const router = require('express').Router();
const todoRoutes = require('./todoRoutes');
const authRoutes = require('./authRoutes');
const userTodoRoutes = require('./userTodoRoutes');
const { requireAuth } = require("../../middlewares/authMiddlewares");
const { getUser } = require("../../controllers/authController");

router.use('/todos', todoRoutes);
router.use('/auth', authRoutes);
router.use('/user', userTodoRoutes);
router.get("/getuser", requireAuth, getUser)

module.exports = router;
