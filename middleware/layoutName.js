module.exports = (layoutName) => (req, res, next) => {
  res.locals.layout = `layouts/${layoutName}`;
  next();
};
