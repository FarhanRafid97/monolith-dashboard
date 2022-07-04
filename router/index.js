const router = require('express').Router();
const controller = require('../controllers');
const layoutName = require('../middleware/layoutName');

router.get('/', controller.home);

const dashboard = require('./dashboard');
router.use('/dashboard', dashboard);

const auth = require('./auth');
router.use('/auth', auth);

router.use(layoutName('default'));
router.use(controller.notFound);
router.use(controller.exception);

module.exports = router;
