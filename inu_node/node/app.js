var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');


const {Sequelize, sequelize} = require('./models');
sequelize.sync({force: false}).catch((err) => {
    console.error(err);
});

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/board', boardRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: err.status || 500});
});

module.exports = app;