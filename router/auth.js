const router = require('express').Router();
const layoutName = require('../middleware/layoutName');
const { auth } = require('../controllers');

router.use(layoutName('authentication'));
router.get('/login', auth.login);
router.get('/register', auth.register);

router.post('/login', auth.api.login);

module.exports = router;
