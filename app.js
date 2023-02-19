var createError = require('http-errors');
var express = require('express');
var hbs = require('hbs'); 
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
var helpers = require('./components/hbsHelpers');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var recipesRouter = require('./routes/recipes');

var app = express();

// __dirname + 'view/partials'
hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => {});
for (let helper in helpers) {
    hbs.registerHelper(helper, helpers[helper]);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movies', recipesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});