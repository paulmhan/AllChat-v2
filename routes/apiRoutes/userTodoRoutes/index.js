const router = require('express').Router();
const {
  getUserTodos,
  deleteUserTodoById,
  updateTodoById,
  getAllUserEmails,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user/emails
router.get('/emails', getAllUserEmails);


// /api/user/todos
router.route('/todos')
  .get(requireAuth, getUserTodos);
// /api/user/emails

router.route('/todos/:todoId')
  .delete(requireAuth, deleteUserTodoById)
  .put(requireAuth, updateTodoById);

module.exports = router;
