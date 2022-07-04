module.exports = {
  login: (req, res) => {
    res.render('pages/authentication/login', {
      layout: 'layouts/authentication',
    });
  },

  register: (req, res) => {
    res.render('pages/authentication/register', {
      layout: 'layouts/authentication',
    });
  },

  api: require('./api'),
};
