const router = require('express').Router();
const tasks = require('./candidates/routes');

router.use('/candidates', tasks);

module.exports = router;
