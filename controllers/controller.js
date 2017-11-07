var express=require('express');
var app=express();
var bodyParser = require('body-parser');




app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

module.exports = function (app,io){






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



var router= require('./../routes/router');
app.use('/', router);




// -----------Error Handling Part -------
// --------------------------------------
// --------------------------------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});



}
