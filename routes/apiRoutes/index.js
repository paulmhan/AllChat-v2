const router = require('express').Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');
const { requireAuth } = require("../../middlewares/authMiddlewares");
const { getUser } = require("../../controllers/authController");

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.get("/getuser", requireAuth, getUser)
router.use("/translate", messageRoutes)

module.exports = router;
