const router = require('express').Router();
const tasks = require('./candidates/routes');
const users = require('./users/routes');

router.use('/candidates', tasks);
router.use('/users', users);

module.exports = router;
