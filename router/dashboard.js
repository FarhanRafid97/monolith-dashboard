const router = require('express').Router();
const layoutName = require('../middleware/layoutName');
const { dashboard } = require('../controllers');
const authenticate = require('../middleware/authenticate');

router.use(authenticate);
router.use(layoutName('dashboard'));

router.get('/', dashboard.home);
router.get('/post', dashboard.post.index);

module.exports = router;
