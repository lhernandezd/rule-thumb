const router = require('express').Router();
const controller = require('./controller');

router.param('id', controller.id);
router.route('/signin').post(controller.signin);
router.route('/signup').post(controller.signup);

router.route('/').get(controller.all);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
