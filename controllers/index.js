module.exports = {
  home: (req, res) => res.render('pages/default/index'),
  notFound: (req, res) => res.render('pages/default/notFound'),
  exception: (err, req, res, next) => {
    console.error(err);
    res.render('pages/default/error');
  },

  dashboard: require('./dashboard'),
  auth: require('./auth'),
};
