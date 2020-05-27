const router = require('express').Router();

const {
  getUserTodos,
  deleteUserTodoById,
  updateTodoById,
  getAllUserEmails,
  addTodo,
} = require('../../../controllers/userController');

const { requireAuth } = require('../../../middlewares/authMiddlewares');

// /api/user/emails
router.get('/emails', getAllUserEmails);


// /api/user/todos
//if they pass the requireAuth, the next handler will be invoked and the req.user property will be set to the authenticated user
// router.route('/todos')
//   .get(requireAuth, getUserTodos)
//   .post(requireAuth, addTodo);
// // /api/user/emails

// router.route('/todos/:todoId')
//   .delete(requireAuth, deleteUserTodoById)
//   .put(requireAuth, updateTodoById);

module.exports = router;

