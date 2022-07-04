const express = require('express');
const expressLayout = require('express-ejs-layouts');

const router = require('./router');
const PORT = 7889;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layouts/default');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session = require('express-session');
app.use(
  session({
    secret: 'Rahasia',
    resave: false,
    saveUninitialized: false,
  })
);
const passport = require('./lib/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(router);
app.use((req, res, next) => {
  res.locals.contentName = null;
  next();
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
