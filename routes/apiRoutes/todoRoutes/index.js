const router = require('express').Router();
const { getTodos } = require('../../../controllers/todoController');

router.route('/')
  .get(getTodos);

module.exports = router;
