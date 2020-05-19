const router = require('express').Router();
const { signUp, signIn } = require('../../../controllers/authController');
const { requireSignIn } = require('../../../middlewares/authMiddlewares');

router.post('/signUp', signUp);
router.post('/signIn', requireSignIn, signIn);

module.exports = router;
